// signin (add user, add prefer)
export const insertUserSql =
    "INSERT INTO user_table (email, name, gender, birth, address, phone) VALUES (?, ?, ?, ?, ?, ?);"

export const getUserID = "SELECT * FROM user_table WHERE id = ?"

export const connectFoodCategory =
    "INSERT INTO user_prefer (category_id, user_id) VALUES (?, ?);"

export const confirmEmail =
    "SELECT EXISTS(SELECT 1 FROM user_table WHERE email = ?) as isExistEmail;"

export const getPreferToUserID =
    "SELECT up.category_id, up.category_id, up.user_id, fc.name " +
    "FROM user_prefer as up JOIN food_category as fc on up.category_id = fc.id " +
    "WHERE up.user_id = ? ORDER BY up.category_id ASC;"
