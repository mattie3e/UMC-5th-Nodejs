import { pool } from "../../config/dbConfig.js"
import { BaseError } from "../../config/error.js"
import { status } from "../../config/responseStatus.js"
import {
    connectFoodCategory,
    confirmEmail,
    getUserID,
    insertUserSql,
    getPreferToUserID,
} from "./userSql.js"

export const addUser = async (data) => {
    try {
        const conn = await pool.getConnection()

        const [confirm] = await pool.query(confirmEmail, data.email)

        if (confirm[0].isExistEmail) {
            conn.release()
            return -1
        }

        const result = await pool.query(insertUserSql, [
            data.email,
            data.name,
            data.gender,
            data.birth,
            data.addr,
            data.phone,
        ])

        conn.release()
        return result[0].insertId
    } catch (err) {
        console.log(err)
        throw new BaseError(status.PARAMETER_IS_WRONG)
    }
}

export const getUser = async (userId) => {
    try {
        const conn = await pool.getConnection()
        const [user] = await pool.query(getUserID, userId)

        if (user.length == 0) {
            return -1
        }

        conn.release()
        return user
    } catch (err) {
        console.log(err)
        throw new BaseError(status.PARAMETER_IS_WRONG)
    }
}

export const setPrefer = async (userId, foodCategoryId) => {
    try {
        const conn = await pool.getConnection()
        const result = await pool.query(connectFoodCategory, [
            foodCategoryId,
            userId,
        ])

        conn.release()

        return result
    } catch (err) {
        console.log(err)
        throw new BaseError(status.PARAMETER_IS_WRONG)
    }
}

export const getUserPreferToUserID = async (userID) => {
    try {
        const conn = await pool.getConnection()
        const prefer = await pool.query(getPreferToUserID, userID)

        conn.release()

        return prefer
    } catch (err) {
        console.log(err)
        throw new BaseError(status.PARAMETER_IS_WRONG)
    }
}
