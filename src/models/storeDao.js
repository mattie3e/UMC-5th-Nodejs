import { pool } from "../../config/dbConfig.js"
import { BaseError } from "../../config/error.js"
import { status } from "../../config/responseStatus.js"

import {
    confirmStoreNumber,
    insertStoreSql,
    getStoreID,
} from "../models/storeSql.js"

export const addStore = async (data) => {
    try {
        const conn = await pool.getConnection()
        const [confirm] = await pool.query(
            confirmStoreNumber,
            data.registerNumber
        )

        console.log(confirm)
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

        console.log(store)

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
