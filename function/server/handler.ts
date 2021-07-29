import {
  Request,
  createRequestHandler as createNodeRequestHandler,
  installGlobals,
} from "@remix-run/node";

import { Context } from "@azure/functions";

installGlobals();

function createRemixRequest(req) {
  let body;
  if (req.body && req.httpMethod !== "get" && req.httpMethod !== "head") {
    body = req.isBase64Encoded
      ? Buffer.from(req.body, "base64").toString()
      : req.body;
  }

  if (req.cookies) {
    req.headers.cookie = req.cookies.join(";");
  }

  const originalUrl = req.headers["x-ms-original-url"];
  return new Request(originalUrl, {
    method: req.httpMethod,
    headers: req.headers,
    body,
  });
}

export function createRequestHandler({ build, mode = process.env.NODE_ENV }) {
  const handleRequest = createNodeRequestHandler(build, mode);

  return async (context: Context) => {
    const response = await handleRequest(createRemixRequest(context.req));
    const text = await response.text();

    context.res = {
      status: response.status,
      headers: Object.fromEntries(response.headers),
      body: text,
    };
  };
}
