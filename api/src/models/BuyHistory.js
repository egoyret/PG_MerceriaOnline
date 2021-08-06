<<<<<<< HEAD
const { DataTypes } = require("sequelize")


module.exports = (sequelize) => {
    sequelize.define("product", {

        way: {
            type: DataTypes.STRING,
            allownull: false
        },
        detail: {
            type: DataTypes.STRING,
            allownull: false

        }
    });
=======
const { DataTypes } = require("sequelize")

module.exports = (sequelize) => {
    sequelize.define("buyHistory", {

        way: {
            type: DataTypes.STRING,
            allownull: false
        },
        detail: {
            type: DataTypes.STRING,
            allownull: false

        }
    });
>>>>>>> 1a30ff234dd378ff6381d8841f13cea537c8b835
}