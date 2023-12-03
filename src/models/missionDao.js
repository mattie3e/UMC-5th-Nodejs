import { pool } from "../../config/dbConfig.js"
import { BaseError } from "../../config/error.js"
import { status } from "../../config/responseStatus.js"

import {
    confirmMissionStatus,
    getMissionStatusWid,
    getMissionWId,
    insertMissionSql,
    insertMissionStatus,
} from "./missionSql.js"
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

export const tryMission = async (data) => {
    try {
        const conn = await pool.getConnection()
        const [confirm] = await pool.query(confirmMissionStatus, [
            data.userId,
            data.missionId,
        ])

        if (confirm[0].isChallenging) {
            conn.release()
            return -1
        }

        const result = await pool.query(insertMissionStatus, [
            data.userId,
            data.missionId,
            0,
        ])

        conn.release()
        return result[0].insertId
    } catch (err) {
        console.log(err)
        throw new BaseError(status.BAD_REQUEST)
    }
}

export const getMissionStatus = async (mStatusId) => {
    try {
        const conn = await pool.getConnection()
        const [status] = await pool.query(getMissionStatusWid, mStatusId)

        if (status.length == 0) {
            return -1
        }

        conn.release()
        return status
    } catch (err) {
        console.log(err)
        throw new BaseError(status.BAD_REQUEST)
    }
}
