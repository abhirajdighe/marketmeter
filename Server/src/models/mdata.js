'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class mdata extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  mdata.init({
    pname: DataTypes.STRING,
    dated: DataTypes.DATEONLY,
    price: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'mdata',
  });
  return mdata;
};