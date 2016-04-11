/**
 * Created by Administrator on 2016/3/29.
 */
var client = require('../database');//链接数据库文件
var uid = require('../utils/uuid');//后边我们用于生成用户ID

function Point(obj) {
    this.point = obj.point;
    this.text = obj.text;
    this.point_id=obj.point_id;
    this.user_id=obj.user_id;
    this.image_id=obj.image_id;
}
mysql = client.getDbCon();
module.exports = Point;//

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
    var sql = "insert into mark_info (mark_id,point,mark_date,text,image_id,point_id,user_id) values(?,?,?,?,?,?,?)";//这对应着我们数据库中的字段
    mysql.query(sql, [uuid, this.point,time.minute,this.text,this.image_id,this.point_id,this.user_id], function (err, results, fields) {
        if (err) {
            throw err;
        } else {
            //返回用户id
            return callback(err, uuid, fields);//返回我们的结果
        }
    });

};

Point.get = function (image_id,callback) {
    var sql = "select a.*,b.nickname from mark_info a,user b where a.user_id=b.user_id and a.image_id='"+image_id+"' ";
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
Point.findmax = function (image_id,callback) {
    var sql = "select max(point_id) as max_id from mark_info where mark_info.image_id='"+image_id+"' ";//
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