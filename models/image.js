/**
 * Created by Administrator on 2016/4/15.
 */
var Sequelize = require('sequelize');
var sequelize = require('./connect');


function image(sequelize, DataTypes) {
    return sequelize.define('image_info', {
        image_id: {
            type: DataTypes.STRING(64),
            allowNull: false,
            primaryKey: true
        },
        image_url: {
            type: DataTypes.STRING(128),
            allowNull: false
        },
        image_name: {
            type: DataTypes.STRING(128),
            allowNull: false,
            comment: '��Ƭ��'//��ע
        },
        user_id: {

            type: DataTypes.STRING(64),
            allowNull: false
        },
        upload_date: {

            type: DataTypes.STRING(32),
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
