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
    EMAIL_IS_REGISTERD: {
        status: StatusCodes.BAD_REQUEST,
        isSuccess: false,
        code: "COMMON005",
        message: "이미 등록된 이메일입니다.",
    },
    STORE_IS_REGISTERED: {
        status: StatusCodes.BAD_REQUEST,
        isSuccess: false,
        code: "COMMON006",
        message: "이미 등록된 가게입니다.",
    },
    STORE_IS_NOT_EXIST: {
        status: StatusCodes.BAD_REQUEST,
        isSuccess: false,
        code: "COMMON007",
        message: "존재하지 않는 가게입니다.",
    },
    CHALLENGING_MISSION: {
        status: StatusCodes.BAD_REQUEST,
        isSuccess: false,
        code: "COMMON008",
        message: "이미 도전 중인 미션입니다.",
    },
}
