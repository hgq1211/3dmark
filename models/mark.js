/**
 * Created by Administrator on 2016/4/15.
 */
var Sequelize = require('sequelize');
var sequelize = require('./connect');

function image(sequelize, DataTypes) {
    return sequelize.define('mark_info', {
        mark_id: {
            type: DataTypes.STRING(64),
            allowNull: false,
            primaryKey: true
        },
        point: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        point_id: {
            type: DataTypes.INTEGER(8),
            allowNull: false
        },
        mark_date: {
            type: DataTypes.STRING(32),
            allowNull: false
        },
        image_id: {
            type: DataTypes.STRING(64),
            allowNull: false
        },
        text: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        user_id: {
            type: DataTypes.STRING(64),
            allowNull: false
        }
    }, {
        timestamps: false,
        freezeTableName: true,
        createdAt: false
    });
}

sequelize.sync();
module.exports =image(sequelize,Sequelize);
