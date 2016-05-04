/**
 * Created by Administrator on 2016/4/15.
 */
var Sequelize = require('sequelize');
var sequelize = require('./connect');

var Mark= sequelize.define('mark_info', {
        mark_id: {
            type: Sequelize.STRING(64),
            allowNull: false,
            primaryKey: true
        },
        point: {
            type: Sequelize.TEXT,
            allowNull: false
        },
        point_id: {
            type: Sequelize.INTEGER(8),
            allowNull: false
        },
        mark_date: {
            type: Sequelize.STRING(32),
            allowNull: false
        },
        image_id: {
            type: Sequelize.STRING(64),
            allowNull: false
        },
        text: {
            type: Sequelize.TEXT,
            allowNull: false
        },
        user_id: {
            type: Sequelize.STRING(64),
            allowNull: false
        }
    }, {
        timestamps: false,
        freezeTableName: true,
        createdAt: false
    });
module.exports =Mark;
