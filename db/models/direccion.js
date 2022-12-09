'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Direccion extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Direccion.hasMany(models.Cabina, {foreignKey: 'direccionId'})
    }
  }
  Direccion.init({
    provincia: {
      type: DataTypes.STRING,
      allowNull: false
    },
    ruta: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    kilometro: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Direccion',
    tableName: 'Direcciones'
  });
  return Direccion;
};