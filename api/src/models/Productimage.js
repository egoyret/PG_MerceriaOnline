<<<<<<< HEAD
const {DataTypes} =require("sequelize")
module.exports=(sequelize)=>{
    sequelize.define("productfeature",{
        id:{
=======
const { DataTypes } = require("sequelize")

module.exports = (sequelize) => {

    sequelize.define("productimage", {

        id: {
>>>>>>> 1a30ff234dd378ff6381d8841f13cea537c8b835
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
<<<<<<< HEAD
        image_url:{
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        
    });
} 
=======
        image_url: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: false,
        },
    });
}
>>>>>>> 1a30ff234dd378ff6381d8841f13cea537c8b835
