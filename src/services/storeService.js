import { BaseError } from "../../config/error.js"
import { status } from "../../config/responseStatus.js"

import { addStore } from "../models/storeDao.js"
import { addStoreResponseDTO } from "../dtos/storeDto.js"
import { getStore } from "../models/storeDao.js"

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
