'use strict';
const {
  Model, Sequelize
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class todo_list extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      todo_list.belongsTo(models.user,{foreignKey:'user_id'})
      // define association here
    }
  };
  todo_list.init({
    title:{
      type:DataTypes.STRING,
      validate:{
        notNull: true,
        notEmpty: true
      }
    },
    description: {
      type:DataTypes.STRING,
      validate:{
        notNull: true,
        notEmpty: true
      }
    },
    status: DataTypes.BOOLEAN,
    due_date:{
      type: DataTypes.DATE,
      validate:{
        isPost(value){
          const now = new Date()
          if (value < now) {
            throw new Error("Hanya boleh input tanggal sekarang dan setelahnya")
          }
        }
      }
    }, 
    user_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'todo_list',
  });
  return todo_list;
};