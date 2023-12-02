import { BaseError } from "../../config/error.js"
import { status } from "../../config/responseStatus.js"
import { signinResponseDTO } from "../dtos/userDto.js"
import {
    addUser,
    getUser,
    getUserPreferToUserID,
    setPrefer,
} from "../models/userDao.js"

export const joinUser = async (body) => {
    const birth = new Date(body.birthYear, body.birthMonth - 1, body.birthDay)
    const prefer = body.prefer

    const joinUserData = await addUser({
        email: body.email,
        name: body.name,
        gender: body.gender,
        addr: body.addr,
        phone: body.phone,
        birth: birth,
    })

    if (joinUserData == -1) {
        throw new BaseError(status.EMAIL_IS_REGISTERD)
    } else {
        for (let i = 0; i < prefer.length; i++) {
            await setPrefer(joinUserData, prefer[i])
        }
        return signinResponseDTO(
            await getUser(joinUserData),
            await getUserPreferToUserID(joinUserData)
        )
    }
}
