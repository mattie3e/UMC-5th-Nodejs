import express from "express"
import { tempAsync, tempTest } from "../controllers/tempController.js"
import { tempException } from "../controllers/tempController.js"

export const tempRouter = express.Router()

tempRouter.get("/test", tempTest)
tempRouter.get("/exception/:flag", tempException)

// 비동기 에러 핸들링 연습
tempRouter.get("/async/:flag", tempAsync)
