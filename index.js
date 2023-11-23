import express from "express"
import { tempRouter } from "./src/routes/tempRoute.js"
import { userRouter } from "./src/routes/userRoute.js"
import { response } from "./config/response.js"
import { BaseError } from "./config/error.js"
import { status } from "./config/responseStatus.js"
import dotenv from "dotenv"
import cors from "cors"
import { specs } from "./config/swaggerConfig.js"
import SwaggerUi from "swagger-ui-express"

dotenv.config()

const app = express()
const port = 3000
app.set("port", process.env.PORT || 3000)
app.use(cors())
app.use(express.static("public"))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

const myLogger = (req, res, next) => {
    console.log("LOGGED")
    next()
}

app.use(myLogger)

//swagger
app.use("/api-docs", SwaggerUi.serve, SwaggerUi.setup(specs))

app.use("/temp", tempRouter)
app.use("/user", userRouter)

app.get("/", (req, res) => {
    console.log("/")
    res.send("Hello UMC!")
})

app.get("/hello", (req, res) => {
    console.log("/hello")
    res.send("Hello world!")
})

// error handling
app.use((req, res, next) => {
    const err = new BaseError(status.NOT_FOUND)
    next(err)
})
app.use(function (err, req, res, next) {
    // 템플릿 엔진 변수 설정
    res.locals.message = err.message

    // 개발환경이라면 에러 출력 아니면 출력 X
    res.locals.error = process.env.NODE_ENV !== "production" ? err : {}
    res.status(err.data.status).send(response(err.data))
})

// 포트를 연결하여 서버 실행
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
