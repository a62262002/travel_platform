'use strict';
module.exports = (sequelize, DataTypes) => {
  const Travel = sequelize.define('Travel', {
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    start_time: DataTypes.STRING,
    end_time: DataTypes.STRING,
    location: DataTypes.STRING,
    price: DataTypes.INTEGER
  }, {});
  Travel.associate = function(models) {
    // associations can be defined here
  };
  return Travel;
};