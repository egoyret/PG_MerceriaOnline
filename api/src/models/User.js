<<<<<<< HEAD
const { DataTypes } = require('sequelize');
=======
const { DataTypes, UUIDV4 } = require('sequelize');
>>>>>>> 1a30ff234dd378ff6381d8841f13cea537c8b835

module.exports = (sequelize) => {

  sequelize.define('user', {

    id: {
      type: DataTypes.UUID,
<<<<<<< HEAD
=======
      defaultValue: UUIDV4,
>>>>>>> 1a30ff234dd378ff6381d8841f13cea537c8b835
      allowNull: false,
      primaryKey: true,
    },
    user_name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
<<<<<<< HEAD
=======
    first_name: {
      type:DataTypes.STRING,
      allowNull:false
    },
    last_name: {
      type:DataTypes.STRING,
      allowNull:false
    },
>>>>>>> 1a30ff234dd378ff6381d8841f13cea537c8b835
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
<<<<<<< HEAD
    type: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    status: {
      type: DataTypes.INTEGER,
=======
    isAdmin: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: false,
    },
    active: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
>>>>>>> 1a30ff234dd378ff6381d8841f13cea537c8b835
      allowNull: false,
    },
    address: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  });
}