import { response } from "../../config/response.js"
import { status } from "../../config/responseStatus.js"

import { joinUser } from "../services/userService.js"

export const userSignin = async (req, res, next) => {
    console.log("회원가입 요청")
    console.log("body:", req.body)

    res.send(response(status.SUCCESS, await joinUser(req.body)))
}
