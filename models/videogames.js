'use strict';
module.exports = (sequelize, DataTypes) => {
  var Videogame = sequelize.define('Videogame', {
    title: DataTypes.STRING,
    description: DataTypes.STRING
  }, {});
  Videogame.associate = function(models) {
    // associations can be defined here
  };
  return Videogame;
};
