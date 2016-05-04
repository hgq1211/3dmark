
var Sequelize = require('sequelize');
var sequelize = require('./connect');

  var User= sequelize.define('user_info', {
    nickname: {
      field: 'nickname',
      type: Sequelize.STRING(64),
      allowNull: false
    },
    register_date: {
      field: 'register_date',
      type: Sequelize.STRING(32),
      allowNull: false,
      comment: "电话"//备注
    },
    user_id: {
      field: 'user_id',
      type: Sequelize.STRING(64),
      allowNull: false,
      unique: true,//索引
      primaryKey: true
    },
    password: {
      field: 'password',
      type: Sequelize.STRING(255),
      allowNull: false
    }
  }, {
    timestamps: false,
    freezeTableName: true,
    createdAt: false
  });
  module.exports =User;
