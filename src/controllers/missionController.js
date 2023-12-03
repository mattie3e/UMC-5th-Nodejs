import { response } from "../../config/response.js"
import { status } from "../../config/responseStatus.js"

import { createMission, startMission } from "../services/missionService.js"

export const missionCreate = async (req, res, next) => {
    console.log("미션 등록")

    res.send(response(status.SUCCESS, await createMission(req.body)))
}

export const missionStart = async (req, res, next) => {
    console.log("미션 도전")

    res.send(
        response(
            status.SUCCESS,
            await startMission(req.body, req.params.missionId)
        )
    )
}
