
var Sequelize = require('sequelize');
var sequelize = require('./connect');

sequelize.sync();
function user(sequelize, DataTypes) {
  return sequelize.define('user_info', {
    nickname: {
      field: 'nickname',
      type: DataTypes.STRING(64),
      allowNull: false
    },
    register_date: {
      field: 'register_date',
      type: DataTypes.STRING(32),
      allowNull: false,
      comment: "电话"//备注
    },
    user_id: {
      field: 'user_id',
      type: DataTypes.STRING(64),
      allowNull: false,
      unique: true,//索引
      primaryKey: true
    },
    password: {
      field: 'password',
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    timestamps: false,
    freezeTableName: true,
    createdAt: false
  });
}
  module.exports =user(sequelize,Sequelize);
