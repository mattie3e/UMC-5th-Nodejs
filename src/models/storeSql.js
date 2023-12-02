export const confirmStoreNumber =
    "SELECT EXISTS(SELECT 1 FROM restaurant WHERE register_number = ?) as isExistStore;"

export const insertStoreSql =
    "INSERT INTO restaurant (region_id, name, register_number, type) VALUES (?, ?, ?, ?);"

export const getStoreID = "SELECT * FROM restaurant WHERE id = ?"

export const confirmStoreId =
    "SELECT EXISTS(SELECT 1 FROM restaurant WHERE id = ?) as isExistStore"

export const insertReviewSql =
    "INSERT INTO review (user_id, restaurant_id, star, content) VALUES (?, ?, ?, ?)"

export const getReviewID = "SELECT * FROM review WHERE id = ?"
