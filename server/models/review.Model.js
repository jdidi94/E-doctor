module.exports = (connection, DataTypes) => {
    const Review = connection.define("Review", {
        rate: {
            type: DataTypes.ENUM,
            values: ["1", "2", "3", "4", "5"],
        },
        content: {
            type: DataTypes.STRING
        }
    })
    return Review
}