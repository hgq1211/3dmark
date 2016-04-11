/**
 * Created by Administrator on 2016/3/29.
 */
var client = require('../database');//�������ݿ��ļ�
var uid = require('../utils/uuid');//����������������û�ID

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
    //�����˸���ʱ���ʽ�������ߵ���
    var date = new Date();
    var time = {
        date: date,
        year: date.getFullYear(),
        month: date.getFullYear() + "-" + (date.getMonth() + 1),
        day: date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate(),
        minute: date.getFullYear() + "-" + ((date.getMonth() + 1)<10?'0'+(date.getMonth() + 1):(date.getMonth() + 1)) + "-" + (date.getDate()<10?'0'+date.getDate():date.getDate()) + " " +
        (date.getHours()<10?'0'+date.getHours():date.getHours() )+ ":" + (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ":" + (date.getSeconds()<10?'0'+date.getSeconds():date.getSeconds())
    };
    //����һ��user���󣬰��������Ǵ��ݵ�����

    uuid = uid.v4();//����һ��������û�ID
    //�������Ĳ�������Ҫ��ǰ�˴��ݹ��������ݲ��뵽���ǵ����ݱ�user֮��
    //�������ݿ�
    var sql = "insert into mark_info (mark_id,point,mark_date,text,image_id,point_id,user_id) values(?,?,?,?,?,?,?)";//���Ӧ���������ݿ��е��ֶ�
    mysql.query(sql, [uuid, this.point,time.minute,this.text,this.image_id,this.point_id,this.user_id], function (err, results, fields) {
        if (err) {
            throw err;
        } else {
            //�����û�id
            return callback(err, uuid, fields);//�������ǵĽ��
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
            callback(err, results, fields);//�������ⷵ�ز�ѯ�ɹ�ʱ�Ľ��
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
            callback(err, results[0], fields);//�������ⷵ�ز�ѯ�ɹ�ʱ�Ľ��
        }
    })
};