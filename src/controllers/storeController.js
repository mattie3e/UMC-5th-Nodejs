import { response } from "../../config/response.js"
import { status } from "../../config/responseStatus.js"

import { createReview, registerStore } from "../services/storeService.js"

export const storeRegister = async (req, res, next) => {
    console.log("스토어 등록")

    res.send(response(status.SUCCESS, await registerStore(req.body)))
}

export const reviewCreate = async (req, res, next) => {
    console.log("리뷰 등록")

    res.send(response(status.SUCCESS, await createReview(req.body)))
}
