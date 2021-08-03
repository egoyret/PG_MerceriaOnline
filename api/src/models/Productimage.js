const {DataTypes} =require("sequelize")
module.exports=(sequelize)=>{
    sequelize.define("productfeature",{
        id:{
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        image_url:{
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        
    });
} 