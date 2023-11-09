import { StatusCodes } from "http-status-codes"

export const status = {
    SUCCESS: {
        status: StatusCodes.OK,
        isSuccess: true,
        code: 2000,
        message: "success!",
    },

    // error
    BAD_REQUEST: {
        status: StatusCodes.BAD_REQUEST,
        isSuccess: false,
        code: "COMMON001",
        message: "잘못된 요청입니다.",
    },
    NOT_FOUND: {
        status: StatusCodes.BAD_REQUEST,
        isSuccess: false,
        code: "COMMON002",
        message: "요청한 페이지를 찾을 수 없습니다.",
    },
}
