var __create = Object.create;
var __defProp = Object.defineProperty;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, {enumerable: true, configurable: true, writable: true, value}) : obj[key] = value;
var __objSpread = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __markAsModule = (target) => __defProp(target, "__esModule", {value: true});
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, {get: all[name], enumerable: true});
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, {get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable});
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? {get: () => module2.default, enumerable: true} : {value: module2, enumerable: true})), module2);
};

// <stdin>
__markAsModule(exports);
__export(exports, {
  assets: () => import_assets.default,
  entry: () => entry,
  routes: () => routes
});

// node_modules/@remix-run/dev/compiler/shims/react.ts
var React = __toModule(require("react"));

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_server = __toModule(require("react-dom/server"));
var import_remix = __toModule(require("remix"));
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let markup = import_server.default.renderToString(/* @__PURE__ */ React.createElement(import_remix.RemixServer, {
    context: remixContext,
    url: request.url
  }));
  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: __objSpread(__objSpread({}, Object.fromEntries(responseHeaders)), {
      "Content-Type": "text/html"
    })
  });
}

// route-module:/home/danielgary/repos/remix-azure-template/app/root.tsx
var root_exports = {};
__export(root_exports, {
  ErrorBoundary: () => ErrorBoundary,
  default: () => App,
  links: () => links,
  loader: () => loader
});
var import_remix2 = __toModule(require("remix"));
var import_react_router_dom = __toModule(require("react-router-dom"));

// app/styles/global.css
var global_default = "/build/_assets/global-I5E7NNPL.css";

// route-module:/home/danielgary/repos/remix-azure-template/app/root.tsx
var links = () => {
  return [{rel: "stylesheet", href: global_default}];
};
var loader = async () => {
  return {date: new Date()};
};
function Document({children}) {
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement("meta", {
    charSet: "utf-8"
  }), /* @__PURE__ */ React.createElement("link", {
    rel: "icon",
    href: "/favicon.png",
    type: "image/png"
  }), /* @__PURE__ */ React.createElement(import_remix2.Meta, null), /* @__PURE__ */ React.createElement(import_remix2.Links, null)), /* @__PURE__ */ React.createElement("body", null, children, /* @__PURE__ */ React.createElement(import_remix2.Scripts, null), process.env.NODE_ENV === "development" && /* @__PURE__ */ React.createElement(import_remix2.LiveReload, null)));
}
function App() {
  let data = (0, import_remix2.useRouteData)();
  return /* @__PURE__ */ React.createElement(Document, null, /* @__PURE__ */ React.createElement(import_react_router_dom.Outlet, null), /* @__PURE__ */ React.createElement("footer", null, /* @__PURE__ */ React.createElement("p", null, "This page was rendered at ", data.date.toLocaleString())));
}
function ErrorBoundary({error}) {
  return /* @__PURE__ */ React.createElement(Document, null, /* @__PURE__ */ React.createElement("h1", null, "App Error"), /* @__PURE__ */ React.createElement("pre", null, error.message), /* @__PURE__ */ React.createElement("p", null, "Replace this UI with what you want users to see when your app throws uncaught errors."));
}

// route-module:/home/danielgary/repos/remix-azure-template/app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index,
  links: () => links2,
  loader: () => loader2,
  meta: () => meta
});
var import_remix3 = __toModule(require("remix"));

// app/styles/index.css
var styles_default = "/build/_assets/index-BGRSJ545.css";

// route-module:/home/danielgary/repos/remix-azure-template/app/routes/index.tsx
var meta = () => {
  return {
    title: "Remix Starter",
    description: "Welcome to remix!"
  };
};
var links2 = () => {
  return [{rel: "stylesheet", href: styles_default}];
};
var loader2 = async () => {
  return {message: "this is awesome \u{1F60E}"};
};
function Index() {
  let data = (0, import_remix3.useRouteData)();
  return /* @__PURE__ */ React.createElement("div", {
    style: {textAlign: "center", padding: 20}
  }, /* @__PURE__ */ React.createElement("h2", null, "Welcome to Remix!"), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("a", {
    href: "https://docs.remix.run"
  }, "Check out the docs"), " to get started."), /* @__PURE__ */ React.createElement("p", null, "Message from the loader: ", data.message));
}

// route-module:/home/danielgary/repos/remix-azure-template/app/routes/404.tsx
var __exports = {};
__export(__exports, {
  default: () => FourOhFour,
  meta: () => meta2
});
var meta2 = () => {
  return {title: "Ain't nothing here"};
};
function FourOhFour() {
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h1", null, "404"));
}

// <stdin>
var import_assets = __toModule(require("./assets.json"));
var entry = {module: entry_server_exports};
var routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "/",
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: "/",
    caseSensitive: false,
    module: routes_exports
  },
  "routes/404": {
    id: "routes/404",
    parentId: "root",
    path: "*",
    caseSensitive: false,
    module: __exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  entry,
  routes
});
