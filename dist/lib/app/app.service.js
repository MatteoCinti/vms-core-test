"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_app_1 = require("@barnebys/express-app");
// import { sentryService } from '../error/sentry.error.service'
// import { logger } from '../logging/logging.service'
// const { middleware } = expressApp.errors
// export const valuationSdk = vmsClientSdk({ env: requireSingleEnv('CORE_API_ENV') as 'production' | 'staging' })
exports.getApp = (path, resource, _options = { parseBody: true }) => {
    // sentryService.init()
    const pre = [
        (req, _res, next) => {
            req.fetched = {};
            next();
        },
    ];
    // if (options.parseBody) {
    //   pre.push(bodyParser.urlencoded({ extended: true }))
    //   pre.push(bodyParser.json())
    // }
    const post = [
    // middleware.errorMw(({ err, req, body }) => {
    //   const { method, url } = req
    //   const { status } = body
    //   logger.error({ err: err.stack, method, url, status })
    //   // sentryService.requestError(req, err)
    // }),
    // middleware.notFoundMw(({ req }) => {
    //   const { method, url } = req
    //   logger.error(`404 - ${method} - ${url}`)
    // }),
    ];
    return express_app_1.default.app.getApp(path, resource, { pre, post });
};
