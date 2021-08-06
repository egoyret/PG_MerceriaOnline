<<<<<<< HEAD
const { DataTypes } = require('sequelize');
=======
const { DataTypes, UUIDV4 } = require('sequelize');
>>>>>>> 1a30ff234dd378ff6381d8841f13cea537c8b835

module.exports = (sequelize) => {

  sequelize.define('office', {

    id: {
      type: DataTypes.UUID,
<<<<<<< HEAD
=======
      defaultValue: UUIDV4,
>>>>>>> 1a30ff234dd378ff6381d8841f13cea537c8b835
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: {
      type: DataTypes.TEXT,
      allowNull: false,
      unique: true,
    },
    phone: {
<<<<<<< HEAD
      type: DataTypes.INTEGER,
=======
      type: DataTypes.BIGINT,
>>>>>>> 1a30ff234dd378ff6381d8841f13cea537c8b835
      allowNull: false,
    },
  });
}