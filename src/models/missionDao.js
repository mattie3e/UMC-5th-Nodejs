import { pool } from "../../config/dbConfig.js"
import { BaseError } from "../../config/error.js"
import { status } from "../../config/responseStatus.js"

import { getMissionWId, insertMissionSql } from "./missionSql.js"
import { confirmStoreId } from "./storeSql.js"

export const addMission = async (data) => {
    try {
        const conn = await pool.getConnection()
        const [confirm] = await pool.query(confirmStoreId, data.storeId)

        if (!confirm[0].isExistStore) {
            conn.release()
            return -1
        }

        const result = await pool.query(insertMissionSql, [
            data.storeId,
            data.reward,
            data.content,
            data.deadline,
        ])

        conn.release()
        return result[0].insertId
    } catch (err) {
        console.log(err)
        throw new BaseError(status.BAD_REQUEST)
    }
}

export const getMission = async (missionId) => {
    try {
        const conn = await pool.getConnection()
        const [mission] = await pool.query(getMissionWId, missionId)

        if (mission.length == 0) {
            return -1
        }

        conn.release()
        return mission
    } catch (err) {
        console.log(err)
        throw new BaseError(status.BAD_REQUEST)
    }
}
