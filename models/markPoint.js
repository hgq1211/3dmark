/**
 * Created by Administrator on 2016/3/29.
 */
var client = require('../database');//�������ݿ��ļ�
var uid = require('../utils/uuid');//����������������û�ID
//һ�������ǵ�һ�����캯��
/*��User�Ĺ��캯���� ���Ǵ���һ������
 �����а������Ǵ��������
 ���������ò���obj�����ȡ����
 *
 */
function Point(obj) {
    this.point = obj.point;
    this.text = obj.text;
}
mysql = client.getDbCon();
module.exports = Point;//�����ǵ�User����¶���ⲿ��һ����ߵ���
//���������Ǹ�User���������ص������뷽��

//���Ǹ�User������һ��ԭʼ����save
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
    var sql = "insert into mark_info (mark_id,point,mark_date,text,image_id) values(?,?,?,?,?)";//���Ӧ���������ݿ��е��ֶ�
    mysql.query(sql, [uuid, this.point,time.minute,this.text,1], function (err, results, fields) {
        if (err) {
            throw err;
        } else {
            //�����û�id
            return callback(err, uuid, fields);//�������ǵĽ��
        }
    });
    //�������ݲ������˽���������ǰ�˴����������ݾͿ��Ա����ȥ��
};
//User�� get����  ���ڻ�ȡ�����û�����������Ϣ��������User�ķ�������ȡ����index����ʱ��֮��Ӧ���ɣ������������������Լ�������
//����Ҳû��ʲôӰ�죬������������
Point.get = function (image_id,callback) {
    var sql = "select * from mark_info where mark_info.image_id='1' ";//
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