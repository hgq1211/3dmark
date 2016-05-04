/**
 * Created by Administrator on 2016/4/15.
 */
var Sequelize = require('sequelize');
var sequelize = require('./connect');


var Image= sequelize.define('image_info', {
        image_id: {
            type: Sequelize.STRING(64),
            allowNull: false,
            primaryKey: true
        },
        image_url: {
            type: Sequelize.STRING(128),
            allowNull: false
        },
        image_name: {
            type: Sequelize.STRING(128),
            allowNull: false,
            comment: 'ÕÕÆ¬Ãû'//±¸×¢
        },
        user_id: {

            type: Sequelize.STRING(64),
            allowNull: false
        },
        upload_date: {

            type: Sequelize.STRING(32),
            allowNull: false
        }
    }, {
        timestamps: false,
        freezeTableName: true,
        createdAt: false
    });
module.exports =Image;
