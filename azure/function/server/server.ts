import { createRequestHandler } from "./handler";

const handleRequest = createRequestHandler({ build: require("./build") });

module.exports = handleRequest;
