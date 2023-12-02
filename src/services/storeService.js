import { BaseError } from "../../config/error.js"
import { status } from "../../config/responseStatus.js"

import { addReview, addStore } from "../models/storeDao.js"
import { addReviewResponseDTO, addStoreResponseDTO } from "../dtos/storeDto.js"
import { getStore, getReview } from "../models/storeDao.js"

export const registerStore = async (body) => {
    const addStoreData = await addStore({
        regionId: body.region_id,
        name: body.name,
        registerNumber: body.register_number,
        type: body.type,
    })

    if (addStoreData == -1) {
        throw new BaseError(status.STORE_IS_REGISTERED)
    } else {
        return addStoreResponseDTO(await getStore(addStoreData))
    }
}

export const createReview = async (body) => {
    const addReviewData = await addReview({
        userId: body.user_id,
        storeId: body.store_id,
        content: body.content,
        star: body.star,
    })

    if (addReviewData == -1) {
        throw new BaseError(status.STORE_IS_NOT_EXIST)
    } else {
        return addReviewResponseDTO(await getReview(addReviewData))
    }
}
