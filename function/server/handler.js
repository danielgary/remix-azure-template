"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __await = (this && this.__await) || function (v) { return this instanceof __await ? (this.v = v, this) : new __await(v); }
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
var __asyncDelegator = (this && this.__asyncDelegator) || function (o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
};
var __asyncGenerator = (this && this.__asyncGenerator) || function (thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRequestHandler = void 0;
var node_1 = require("@remix-run/node");
var zlib_1 = __importDefault(require("zlib"));
var path_1 = __importDefault(require("path"));
var fs_1 = __importDefault(require("fs"));
node_1.installGlobals();
var path_2 = require("path");
var promises_1 = require("fs/promises");
var PUBLIC_CACHE_SECONDS = 60 * 60 * 24 * 7;
function getFiles(dir) {
    return __asyncGenerator(this, arguments, function getFiles_1() {
        var entries, _i, entries_1, entry, res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, __await(promises_1.readdir(dir, { withFileTypes: true }))];
                case 1:
                    entries = _a.sent();
                    _i = 0, entries_1 = entries;
                    _a.label = 2;
                case 2:
                    if (!(_i < entries_1.length)) return [3 /*break*/, 9];
                    entry = entries_1[_i];
                    res = path_2.resolve(dir, entry.name);
                    if (!entry.isDirectory()) return [3 /*break*/, 5];
                    return [5 /*yield**/, __values(__asyncDelegator(__asyncValues(getFiles(res))))];
                case 3: return [4 /*yield*/, __await.apply(void 0, [_a.sent()])];
                case 4:
                    _a.sent();
                    return [3 /*break*/, 8];
                case 5: return [4 /*yield*/, __await(res)];
                case 6: return [4 /*yield*/, _a.sent()];
                case 7:
                    _a.sent();
                    _a.label = 8;
                case 8:
                    _i++;
                    return [3 /*break*/, 2];
                case 9: return [2 /*return*/];
            }
        });
    });
}
function createRemixRequest(req) {
    var body;
    if (req.body && req.httpMethod !== "get" && req.httpMethod !== "head") {
        body = req.isBase64Encoded
            ? Buffer.from(req.body, "base64").toString()
            : req.body;
    }
    if (req.cookies) {
        req.headers.cookie = req.cookies.join(";");
    }
    return new node_1.Request(req.url, {
        method: req.httpMethod,
        headers: req.headers,
        body: body,
    });
}
function createRequestHandler(_a) {
    var _this = this;
    var build = _a.build, _b = _a.mode, mode = _b === void 0 ? process.env.NODE_ENV : _b;
    var handleRequest = node_1.createRequestHandler(build, mode);
    var ROOT_DIR = path_1.default.resolve(__dirname, "../../../public");
    var PUBLIC_FILES = {};
    (function () { return __awaiter(_this, void 0, void 0, function () {
        var _a, _b, f, fileName, e_1_1;
        var e_1, _c;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    _d.trys.push([0, 5, 6, 11]);
                    _a = __asyncValues(getFiles(ROOT_DIR));
                    _d.label = 1;
                case 1: return [4 /*yield*/, _a.next()];
                case 2:
                    if (!(_b = _d.sent(), !_b.done)) return [3 /*break*/, 4];
                    f = _b.value;
                    fileName = path_1.default.relative(ROOT_DIR, f).replace(/\\/g, "/");
                    PUBLIC_FILES["" + fileName] = f;
                    _d.label = 3;
                case 3: return [3 /*break*/, 1];
                case 4: return [3 /*break*/, 11];
                case 5:
                    e_1_1 = _d.sent();
                    e_1 = { error: e_1_1 };
                    return [3 /*break*/, 11];
                case 6:
                    _d.trys.push([6, , 9, 10]);
                    if (!(_b && !_b.done && (_c = _a.return))) return [3 /*break*/, 8];
                    return [4 /*yield*/, _c.call(_a)];
                case 7:
                    _d.sent();
                    _d.label = 8;
                case 8: return [3 /*break*/, 10];
                case 9:
                    if (e_1) throw e_1.error;
                    return [7 /*endfinally*/];
                case 10: return [7 /*endfinally*/];
                case 11: return [2 /*return*/];
            }
        });
    }); })();
    return function (context) { return __awaiter(_this, void 0, void 0, function () {
        var pathName, buffer, response, text;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    pathName = new URL(context.req.url).pathname.substr(1);
                    if (!PUBLIC_FILES[pathName]) return [3 /*break*/, 1];
                    buffer = zlib_1.default.gzipSync(fs_1.default.readFileSync(PUBLIC_FILES[pathName]));
                    context.res = {
                        status: 200,
                        isRaw: true,
                        headers: {
                            "cache-control": "max-age=" + PUBLIC_CACHE_SECONDS,
                            "content-encoding": "gzip",
                            "content-length": buffer.length,
                        },
                        body: buffer,
                    };
                    return [3 /*break*/, 4];
                case 1: return [4 /*yield*/, handleRequest(createRemixRequest(context.req))];
                case 2:
                    response = _a.sent();
                    return [4 /*yield*/, response.text()];
                case 3:
                    text = _a.sent();
                    context.res = {
                        status: response.status,
                        headers: Object.fromEntries(response.headers),
                        body: text,
                    };
                    _a.label = 4;
                case 4: return [2 /*return*/];
            }
        });
    }); };
}
exports.createRequestHandler = createRequestHandler;
