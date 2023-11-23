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
    TEST_ERROR: {
        status: StatusCodes.BAD_REQUEST,
        isSuccess: false,
        code: "COMMON003",
        message: "테스트 에러입니돠.",
    },
    PARAMETER_IS_WRONG: {
        status: StatusCodes.BAD_REQUEST,
        isSuccess: false,
        code: "COMMON004",
        message: "유저 가입 테스트 에러입니돠.",
    },
}
