module.exports = (connection, DataTypes) => {
    const Report = connection.define("Report", {
        content: {
            type: DataTypes.STRING
        }
    })
    return Report
}