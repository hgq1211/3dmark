/**
 * Created by Administrator on 2016/3/29.
 */
var client = require('../database');//链接数据库文件
var uid = require('../utils/uuid');//后边我们用于生成用户ID
//一下是我们的一个构造函数
/*在User的构造函数中 我们传入一个对象
 对象中包含我们传入的属性
 这里我们用参数obj（随便取名）
 *
 */
function Point(obj) {
    this.point = obj.point;
    this.text = obj.text;
}
mysql = client.getDbCon();
module.exports = Point;//将我们的User对象暴露给外部，一遍外边调用
//接下来我们给User对象添加相关的属性与方法

//这是给User创建的一个原始方法save
Point.prototype.save = function save(callback) {
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
    var sql = "insert into mark_info (mark_id,point,mark_date,text,image_id) values(?,?,?,?,?)";//这对应着我们数据库中的字段
    mysql.query(sql, [uuid, this.point,time.minute,this.text,1], function (err, results, fields) {
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
Point.get = function (image_id,callback) {
    var sql = "select * from mark_info where mark_info.image_id='1' ";//
    console.log(sql);
    mysql.query(sql, function (err, results, fields) {
        if (err) {
            throw err;
        }
        else {
            console.log(results);
            callback(err, results, fields);//我们在这返回查询成功时的结果
        }
    })
};