import {
  Request as NodeRequest,
  installGlobals,
  formatServerError
} from "@remix-run/node";
import { createRequestHandler as createNodeRequestHandler, ServerPlatform } from "@remix-run/server-runtime"

import { Context, HttpRequest } from "@azure/functions";

installGlobals();

function createRemixRequest(req: HttpRequest) {
  let body;
  if (req.body && req.method !== "GET" && req.method !== "HEAD") {
    body = 
      // req.isBase64Encoded
      // ? Buffer.from(req.body, "base64").toString() :
      req.body;
  }

  const originalUrl = req.headers["x-ms-original-url"];
  return new NodeRequest(originalUrl, {
    method: req.method ? req.method.toString() : undefined,
    headers: req.headers,
    body,
  });
}

export function createRequestHandler({ build, mode = process.env.NODE_ENV }) {
  let platform: ServerPlatform = { formatServerError };
  const handleRequest = createNodeRequestHandler(build, platform, mode);

  return async (context: Context, req: HttpRequest) => {
    const response = await handleRequest(createRemixRequest(req) as unknown as Request);
    const text = await response.text();

    context.res = {
      status: response.status,
      headers: Object.fromEntries(response.headers),
      body: text,
    };
  };
}
