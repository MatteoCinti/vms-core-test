import { Handler } from "express"
import { getApp } from "../../lib/app/app.service"
import { getRouter } from "../../lib/router/router.service"
import { testEndpoint } from "./controllers"

const router = getRouter()

const endpoints = [
  testEndpoint
]

const loggerMw: Handler = (_req, _res, next)  => {
  console.log("Logger MW")
  next()
}

router.use([loggerMw, ...endpoints])
export const testApi = getApp('/test', router)