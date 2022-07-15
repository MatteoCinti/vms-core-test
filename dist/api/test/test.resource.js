"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_service_1 = require("../../lib/app/app.service");
const router_service_1 = require("../../lib/router/router.service");
const controllers_1 = require("./controllers");
const router = router_service_1.getRouter();
const endpoints = [
    controllers_1.testEndpoint
];
router.use(endpoints);
exports.testApi = app_service_1.getApp('/test', router);
