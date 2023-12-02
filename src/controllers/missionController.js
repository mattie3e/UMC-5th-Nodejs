import { response } from "../../config/response.js"
import { status } from "../../config/responseStatus.js"

import { createMission } from "../services/missionService.js"

export const missionCreate = async (req, res, next) => {
    console.log("미션 등록")

    res.send(response(status.SUCCESS, await createMission(req.body)))
}
