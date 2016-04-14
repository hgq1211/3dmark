/**
 * Created by Administrator on 2016/3/11 0011.
 */
var client = require('../database');//链接数据库文件
var uid = require('../utils/uuid');//后边我们用于生成用户ID
//一下是我们的一个构造函数
/*在User的构造函数中 我们传入一个对象
    对象中包含我们传入的属性
    这里我们用参数obj（随便取名）
*
 */
function User(obj) {
    this.nickname = obj.nickname;
    this.password = obj.password;
}
mysql = client.getDbCon();
module.exports = User;//将我们的User对象暴露给外部，一遍外边调用
//接下来我们给User对象添加相关的属性与方法

//这是给User创建的一个原始方法save
User.prototype.save = function save(callback) {
    //设置了各种时间格式，方便后边调用
    var date = new Date();
    var time = {
        date: date,
        year: date.getFullYear(),
        month: date.getFullYear() + "-" + (date.getMonth() + 1),
        day: date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate(),
        minute: date.getFullYear() + "-" + ((date.getMonth() + 1)<10?'0'+(date.getMonth() + 1):(date.getMonth() + 1)) + "-" + (date.getDate()<10?'0'+date.getDate():date.getDate()) + " " +
        (date.getHours()<10?'0'+date.getHours():date.getHours() )+ ":" + (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ":" + (date.getSeconds()<10?'0'+date.getSeconds():date.getSeconds())
    };
    //定义一个user对象，包含了我们传递的属性

    uuid = uid.v4();//生成一个随机的用户ID
    //接下来的操作就是要把前端传递过来的数据插入到我们的数据表user之中
    //插入数据库
    var sql = "insert into user (nickname,register_date,user_id,password) values(?,?,?,?)";//这对应着我们数据库中的字段
    mysql.query("insert into user nickname=?,register_date=?,user_id=?,password=?", [this.nickname, time.minute, uuid, this.password], function (err, results, fields) {
        if (err) {
            throw err;
        } else {
            //返回用户id
            return callback(err, uuid, fields);//返回我们的结果
        }
    });
    //插入数据操作到此结束，这样前端传过来的数据就可以保存进去了
};
//User的 get方法  用于获取给定用户名的所有信息。。。。User的方法名自取，在index调用时与之对应即可，，匿名函数可以有自己的名字
//这样也没有什么影响，，，，都可以
User.get = function (nickname, callback) {
    var sql = "select * from user where user.nickname='" + nickname + "'";//nickname就是我们给定的用户名变量
    console.log(sql);
    mysql.query(sql, function (err, results, fields) {
        if (err) {
            throw err;
        }
        else {
            console.log(results);
            callback(err, results[0], fields);//我们在这返回查询成功时的结果
        }
    })
};