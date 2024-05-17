module.exports = (connection, DataTypes) => {
    const Doctor = connection.define("Doctor", {
        name: {
            type: DataTypes.STRING
        },
        age: {
            type: DataTypes.INTEGER
        },
        cin: {
            type: DataTypes.STRING,
        },
        avatarUrl: {
            type: DataTypes.TEXT,
            defaultValue: "../../client/src/assets/images/placeUser.jpg"
        },
        schedule: {
            type: DataTypes.JSON,
            defaultValue: ["08:00", "09:00", "10:00", "11:00", "13:00", "14:00", "15:00", "16:00"]
        },
        papers: {
            type: DataTypes.JSON,
        },
        gender: {
            type: DataTypes.ENUM,
            values: ["male", "female"]
        },
        phone: {
            type: DataTypes.INTEGER,
            unique: true
        },
        email: {
            type: DataTypes.STRING,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        address: {
            type: DataTypes.STRING,
        },
        isVerified: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        department: {
            type: DataTypes.ENUM,
            values: ["Neurologist", "Dermatology", "Gynecologist", "Generalist", "Radiology", "Orthopedics", "Dentistry", "Surgery"]
        },
        password: {
            type: DataTypes.STRING
        }
    })
    return Doctor

}

