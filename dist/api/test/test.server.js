"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import { initDB } from '@barnebys/db-lib'
const http_1 = require("http");
const test_resource_1 = require("./test.resource");
(async () => {
    // await initDB()
    http_1.createServer(test_resource_1.testApi).listen();
})();
