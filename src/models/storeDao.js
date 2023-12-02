import { pool } from "../../config/dbConfig.js"
import { BaseError } from "../../config/error.js"
import { status } from "../../config/responseStatus.js"

import {
    confirmStoreNumber,
    insertStoreSql,
    getStoreID,
    insertReviewSql,
    getReviewID,
    confirmStoreId,
} from "../models/storeSql.js"

export const addStore = async (data) => {
    try {
        const conn = await pool.getConnection()
        const [confirm] = await pool.query(
            confirmStoreNumber,
            data.registerNumber
        )

        if (confirm[0].isExistStore) {
            conn.release()
            return -1
        }

        const result = await pool.query(insertStoreSql, [
            data.regionId,
            data.name,
            data.registerNumber,
            data.type,
        ])

        conn.release()
        return result[0].insertId
    } catch (err) {
        console.log(err)
        throw new BaseError(status.BAD_REQUEST)
    }
}

export const getStore = async (storeId) => {
    try {
        const conn = await pool.getConnection()
        const [store] = await pool.query(getStoreID, storeId)

        if (store.length == 0) {
            return -1
        }

        conn.release()
        return store
    } catch (err) {
        console.log(err)
        throw new BaseError(status.BAD_REQUEST)
    }
}

//Review
export const addReview = async (data) => {
    try {
        const conn = await pool.getConnection()
        const [confirm] = await pool.query(confirmStoreId, data.storeId)

        if (!confirm[0].isExistStore) {
            conn.release()
            return -1
        }

        const result = await pool.query(insertReviewSql, [
            data.userId,
            data.storeId,
            data.star,
            data.content,
        ])

        conn.release()
        return result[0].insertId
    } catch (err) {
        console.log(err)
        throw new BaseError(status.BAD_REQUEST)
    }
}

export const getReview = async (reviewId) => {
    try {
        const conn = await pool.getConnection()
        const [review] = await pool.query(getReviewID, reviewId)

        if (review.length == 0) {
            return -1
        }

        conn.release()
        return review
    } catch (err) {
        console.log(err)
        throw new BaseError(status.BAD_REQUEST)
    }
}
