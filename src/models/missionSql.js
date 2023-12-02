export const insertMissionSql =
    "INSERT INTO mission (restaurant_id, reward, content, deadline) VALUES (?, ?, ?, ?);"

export const getMissionWId = "SELECT * FROM mission WHERE id = ?"
