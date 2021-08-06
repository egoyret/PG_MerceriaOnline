const { DataTypes } = require("sequelize")
<<<<<<< HEAD
module.exports = (sequelize) => {
    sequelize.define("product", {
=======

module.exports = (sequelize) => {

    sequelize.define("product", {

>>>>>>> 1a30ff234dd378ff6381d8841f13cea537c8b835
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
<<<<<<< HEAD
         catalog_id:{
            type: DataTypes.INTEGER,
            allowNull:false,
=======
        catalog_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
>>>>>>> 1a30ff234dd378ff6381d8841f13cea537c8b835
            unique: true,
        },
        title: {
            type: DataTypes.STRING
        },
        resume: {
<<<<<<< HEAD
            type: DataTypes.STRING
=======
            type: DataTypes.TEXT
>>>>>>> 1a30ff234dd378ff6381d8841f13cea537c8b835
        },
        detail: {
            type: DataTypes.TEXT
        },
        price: {
<<<<<<< HEAD
            tyep: DataTypes.FLOAT
=======
            type: DataTypes.FLOAT
>>>>>>> 1a30ff234dd378ff6381d8841f13cea537c8b835
        },
    });
}