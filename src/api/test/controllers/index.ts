import { Handler } from "express"
import { getRouter } from '../../../lib/router/router.service'
import { getDebugger } from '../../../lib/debug/debug.service'

const debug = getDebugger('validationMw')


const controller: Handler = async (_req, res) => {
  console.log("TEST CONTROLLER!!!")
  res.send("HELLO I AM WORKING")
}

const loggerMw: Handler = (req, _res, next)  => {
  debug(req.method + ' ' + req.url);
  next()
}


export const testEndpoint = getRouter().get('/test-two', loggerMw, controller)
