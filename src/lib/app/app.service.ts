import expressApp from '@barnebys/express-app'
// import { requireSingleEnv } from '@barnebys/shared-util'
// import vmsClientSdk from '@barnebys/vms-client-sdk-node'
import bodyParser = require('body-parser')
import * as express from 'express'
import { Express, Handler } from 'express-serve-static-core'
// import { sentryService } from '../error/sentry.error.service'
// import { logger } from '../logging/logging.service'

const { middleware } = expressApp.errors

// export const valuationSdk = vmsClientSdk({ env: requireSingleEnv('CORE_API_ENV') as 'production' | 'staging' })

export const getApp = (
  path: string,
  resource: express.Router,
  options: { parseBody: boolean } = { parseBody: true },
): Express => {
  // sentryService.init()

  const pre: Handler[] = [
    (req, _res, next) => {
      req.fetched = {}
      next()
    },
  ]

  if (options.parseBody) {
    pre.push(bodyParser.urlencoded({ extended: true }))
    pre.push(bodyParser.json())
  }

  const loggerMw: Handler = (_req, _res, next)  => {
    console.log("MWWWW")
    next()
  }
  

  const post: Handler[] = [
    middleware.errorMw(({ err, req, body }) => {
      const { method, url } = req
      const { status } = body
      console.error({ err: err.stack, method, url, status })
      // sentryService.requestError(req, err)
    }),
    middleware.notFoundMw(({ req }) => {
      const { method, url } = req
      console.error(`404 - ${method} - ${url}`)
    }),
  ]

  return expressApp.app.getApp(path, resource, { pre, post })
}