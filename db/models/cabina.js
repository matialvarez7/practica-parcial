'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cabina extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Cabina.belongsTo(models.Direccion, {foreignKey: 'direccionId'})
    }
  }
  Cabina.init({
    numero: {
      type: DataTypes.INTEGER
    },
    direccionId: {
      type: DataTypes.INTEGER
    }
  }, {
    sequelize,
    modelName: 'Cabina',
    tableName: 'Cabinas'
  });
  return Cabina;
};