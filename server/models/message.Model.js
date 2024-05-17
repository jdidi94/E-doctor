
module.exports = (connection, DataTypes) => {
    const Message = connection.define("Message", {
        content: {
            type: DataTypes.STRING,
            allowNull: false
        },
        senderPhone: {
            type: DataTypes.STRING,
        }
    })
    return Message
}
