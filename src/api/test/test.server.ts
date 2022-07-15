// import { initDB } from '@barnebys/db-lib'
import { createServer } from 'http'
import { testApi } from './test.resource'
;(async () => {
  // await initDB()
  createServer(testApi).listen()
})()
