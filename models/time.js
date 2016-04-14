/**
 * Created by Administrator on 2016/4/14.
 */
var date = new Date();
var time = {
    date: date,
    year: date.getFullYear(),
    month: date.getFullYear() + "-" + (date.getMonth() + 1),
    day: date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate(),
    minute: date.getFullYear() + "-" + ((date.getMonth() + 1)<10?'0'+(date.getMonth() + 1):(date.getMonth() + 1)) + "-" + (date.getDate()<10?'0'+date.getDate():date.getDate()) + " " +
    (date.getHours()<10?'0'+date.getHours():date.getHours() )+ ":" + (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ":" + (date.getSeconds()<10?'0'+date.getSeconds():date.getSeconds())
};
module.exports=time;