import { response } from "../../config/response.js"
import { status } from "../../config/responseStatus.js"

import { registerStore } from "../services/storeService.js"

export const storeRegister = async (req, res, next) => {
    console.log("스토어 등록")

    res.send(response(status.SUCCESS, await registerStore(req.body)))
}
