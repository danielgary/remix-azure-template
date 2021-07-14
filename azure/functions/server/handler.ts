import {
  Request,
  createRequestHandler as createNodeRequestHandler,
  installGlobals,
} from "@remix-run/node";

import path from "path";
import fs from "fs";

import { stringify } from "querystring";

installGlobals();

import { resolve } from "path";
import { readdir } from "fs/promises";

async function* getFiles(dir: string): AsyncGenerator<string> {
  const entries = await readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const res = resolve(dir, entry.name);
    if (entry.isDirectory()) {
      yield* getFiles(res);
    } else {
      yield res;
    }
  }
}

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

  return new Request(req.url, {
    method: req.httpMethod,
    headers: req.headers,
    body,
  });
}

export function createRequestHandler({ build, mode = process.env.NODE_ENV }) {
  const handleRequest = createNodeRequestHandler(build, mode);
  const ROOT_DIR = path.resolve(__dirname, "../../../public/build");
  const PUBLIC_FILES: { [key: string]: string } = {};

  (async () => {
    for await (const f of getFiles(ROOT_DIR)) {
      const fileName = path.relative(ROOT_DIR, f).replace(/\\/g, "/");
      PUBLIC_FILES[`/build/${fileName}`] = f;
    }
  })();

  return async (context) => {
    const pathName = new URL(context.req.url).pathname;
    if (PUBLIC_FILES[pathName]) {
      context.res = {
        status: 200,
        body: fs.readFileSync(PUBLIC_FILES[pathName]),
      };
    } else {
      const response = await handleRequest(createRemixRequest(context.req));
      const text = await response.text();

      context.res = {
        status: response.status,
        headers: Object.fromEntries(response.headers),
        body: text,
      };
    }
  };
}
