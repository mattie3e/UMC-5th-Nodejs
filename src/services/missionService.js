import { BaseError } from "../../config/error.js"
import { status } from "../../config/responseStatus.js"

import { addMissionResponseDTO } from "../dtos/missionDto.js"
import { addMission, getMission } from "../models/missionDao.js"

export const createMission = async (body) => {
    const deadline = new Date(
        body.deadlineYear,
        body.deadlineMonth - 1,
        body.deadlineDay
    )

    const addMissionData = await addMission({
        storeId: body.store_id,
        reward: body.reward,
        content: body.content,
        deadline: deadline,
    })

    if (addMissionData == -1) {
        throw new BaseError(status.STORE_IS_NOT_EXIST)
    } else {
        return addMissionResponseDTO(await getMission(addMissionData))
    }
}
