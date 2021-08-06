const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define("bundle", {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
<<<<<<< HEAD
        discout: {
=======
        discount: {
>>>>>>> 1a30ff234dd378ff6381d8841f13cea537c8b835
            type: DataTypes.FLOAT,
            allowNull: false
        }
    });
}

