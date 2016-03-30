(function() {
    var settings;
//所用数据库的基本信息
    settings = {
        db: {
            host: 'localhost',     //本地数据库
            port: '3306',
            user: 'root',          //数据库用户名
            password: 'hgq1211',    //数据库密码
            database: '3Dmark'  //数据库名称
        }
    };
    module.exports = settings;
}).call(this);