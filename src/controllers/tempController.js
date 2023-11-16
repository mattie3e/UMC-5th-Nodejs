import { status } from "../../config/responseStatus.js"
import { asyncFnc, getTempData } from "../services/tempService.js"
import { response } from "../../config/response.js"
import { CheckFlag } from "../services/tempService.js"

export const tempTest = (req, res, next) => {
    res.send(response(status.SUCCESS, getTempData()))
}

export const tempException = (req, res, next) => {
    console.log("/temp/exception/" + req.params.flag)
    return res.send(response(status.SUCCESS, CheckFlag(req.params.flag)))
}

///////
export const tempAsync = async (req, res, next) => {
    try {
        const result = await asyncFnc(req.params.flag)
        res.send(result)
    } catch (error) {
        // next 함수로 다음 에러 핸들러로 전달하는 방법 (express 공식 가이드)
        next(error)

        // express-async-errors 패키지 쓰는 방법
    }
}
