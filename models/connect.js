//连接数据库当中的post表
var Sequelize = require('sequelize');
//var models=module.exports={};
var sequelize = new Sequelize('3dmark', 'root', 'hgq1211',
        {host : '127.0.0.1',
            port : '3306',
            dialect : 'mysql',
            define: {
                freezeTableName: true,
                charset: 'utf8',
                collate: 'utf8_general_ci',
                timestamps: false
            }
        });

module.exports=sequelize;
