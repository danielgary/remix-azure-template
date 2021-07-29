"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var handler_1 = require("./handler");
var handleRequest = handler_1.createRequestHandler({ build: require("./build") });
module.exports = handleRequest;
