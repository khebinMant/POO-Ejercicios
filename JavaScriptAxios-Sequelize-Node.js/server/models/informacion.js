'use strict';
module.exports = (sequelize, DataTypes) => {
  const Informacion = sequelize.define('Informacion', {
    primerElemento:DataTypes.INTEGER,
    segundoElemento:DataTypes.INTEGER,
    maximoValorSerie:DataTypes.INTEGER,
    sumaPares: DataTypes.INTEGER,
    listaPares: DataTypes.STRING,
    listaTodos: DataTypes.STRING
  }, {});
  Informacion.associate = function(models) {
    // associations can be defined here
  };
  return Informacion;
};