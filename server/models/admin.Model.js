
module.exports = (connection, DataTypes) => {
    const Admin = connection.define("Admin", {
        adminName: {
            type: DataTypes.STRING
        },
        password: {
            type: DataTypes.STRING
        },
        avatarUrl: {
            type: DataTypes.TEXT
        },
    })
    return Admin
}