import {
  Request,
  createRequestHandler as createNodeRequestHandler,
  installGlobals,
} from "@remix-run/node";

import { Context } from "@azure/functions";
import zlib from "zlib";
import path from "path";
import fs from "fs";

installGlobals();

import { resolve } from "path";
import { readdir } from "fs/promises";

const PUBLIC_CACHE_SECONDS = 60 * 60 * 24 * 7;

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
  const ROOT_DIR = path.resolve(__dirname, "../../../public");
  const PUBLIC_FILES: { [key: string]: string } = {};

  (async () => {
    for await (const f of getFiles(ROOT_DIR)) {
      const fileName = path.relative(ROOT_DIR, f).replace(/\\/g, "/");
      PUBLIC_FILES[`${fileName}`] = f;
    }
  })();

  return async (context: Context) => {
    const pathName = new URL(context.req!.url).pathname.substr(1);
    if (PUBLIC_FILES[pathName]) {
      const buffer = zlib.gzipSync(fs.readFileSync(PUBLIC_FILES[pathName]));

      context.res = {
        status: 200,
        isRaw: true,
        headers: {
          "cache-control": `max-age=${PUBLIC_CACHE_SECONDS}`,
          "content-encoding": "gzip",
          "content-length": buffer.length,
        },
        body: buffer,
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
