module.exports = (connection, DataTypes) => {
    const Appointment = connection.define("Appointment", {
        date: {
            type: DataTypes.STRING
        },
        status: {
            type: DataTypes.ENUM,
            values: ["pending", "accepted", "rejected"],
            defaultValue: "pending"
        },
        disease: {
            type: DataTypes.STRING
        },
        isFinished: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    })
    return Appointment
}