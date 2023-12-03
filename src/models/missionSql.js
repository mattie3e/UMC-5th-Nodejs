export const insertMissionSql =
    "INSERT INTO mission (restaurant_id, reward, content, deadline) VALUES (?, ?, ?, ?);"

export const getMissionWId = "SELECT * FROM mission WHERE id = ?"

export const confirmMissionStatus =
    "SELECT EXISTS(SELECT 1 FROM mission_status WHERE user_id = ? and mission_id = ?) as isChallenging;"

export const insertMissionStatus =
    "INSERT INTO mission_status (user_id, mission_id, status) VALUES (?, ?, ?)"

export const getMissionStatusWid = "SELECT * FROM mission_status WHERE id = ?"
