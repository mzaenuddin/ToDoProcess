'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class todo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  todo.init({
    task:{ 
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'Ga boleh kosong'
        }
      }
    },
    status: DataTypes.STRING,
    finishDate: DataTypes.DATE,
    tag: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'todo',
  });
  return todo;
};