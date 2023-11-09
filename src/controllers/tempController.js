import { status } from "../../config/responseStatus.js"
import { getTempData } from "../services/tempService.js"
import { response } from "../../config/response.js"
import { CheckFlag } from "../services/tempService.js"

export const tempTest = (req, res, next) => {
    res.send(response(status.SUCCESS, getTempData()))
}

export const tempException = (req, res, next) => {
    console.log("/temp/exception/" + req.params.flag)
    return res.send(response(status.SUCCESS, CheckFlag(req.params.flag)))
}
