'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class chickenData extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  chickenData.init({
    city: DataTypes.STRING,
    dated: DataTypes.DATEONLY,
    price: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'chickenData',
  });
  return chickenData;
};