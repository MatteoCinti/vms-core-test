"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const router_service_1 = require("../../../lib/router/router.service");
const controller = async (_req, res) => {
    res.send("HELLO I AM WORKING");
};
exports.testEndpoint = router_service_1.getRouter().get('/test-two', controller);
