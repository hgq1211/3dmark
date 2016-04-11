/**
 * Created by Administrator on 2016/4/11.
 */
/**
 * Created by Administrator on 2016/3/29.
 */
var client = require('../database');//�������ݿ��ļ�
var uid = require('../utils/uuid');//����������������û�ID

function Image(obj) {
    this.image_url = obj.img_url;
    this.image_name = obj.image_name;
    this.user_id=obj.user_id;
}
mysql = client.getDbCon();
module.exports = Image;

//���Ǹ�User������һ��ԭʼ����save
Image.prototype.save = function save(callback) {
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
    var sql = "insert into image (image_id,image_name,image_url,upload_date,user_id) values(?,?,?,?,?)";//���Ӧ���������ݿ��е��ֶ�
    mysql.query(sql, [uuid, this.image_name,this.image_url,time.minute,this.user_id], function (err, results, fields) {
        if (err) {
            throw err;
        } else {
            //�����û�id
            return callback(err, uuid, fields);//�������ǵĽ��
        }
    });

};

Image.get = function (image_id,callback) {
    var sql = "select * from mark_info where mark_info.image_id='"+image_id+"' ";//
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
