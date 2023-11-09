import { BaseError } from "../../config/error.js"
import { status } from "../../config/responseStatus.js"
import { tempResponseDTO } from "../dtos/tempResponseDto.js"
import { flagResponseDTO } from "../dtos/tempResponseDto.js"

export const getTempData = () => {
    return tempResponseDTO("This is TEST! ><")
}

export const CheckFlag = (flag) => {
    if (flag == 1) {
        throw new BaseError(status.BAD_REQUEST)
    } else {
        return flagResponseDTO(flag)
    }
}
