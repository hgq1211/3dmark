var post=require('./connect');//获取链接数据库中post表的sequelize对象
var uid = require('./uuid');//后边我们用于生成用户ID
uuid = uid.v4();//生成一个随机的用户ID
function User(obj)
{
   this.nickname=obj.nickname;
   this.password=obj.password;
}
module.exports=User;
var date = new Date();
var time = {
    date: date,
    year: date.getFullYear(),
    month: date.getFullYear() + "-" + (date.getMonth() + 1),
    day: date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate(),
    minute: date.getFullYear() + "-" + ((date.getMonth() + 1)<10?'0'+(date.getMonth() + 1):(date.getMonth() + 1)) + "-" + (date.getDate()<10?'0'+date.getDate():date.getDate()) + " " +
    (date.getHours()<10?'0'+date.getHours():date.getHours() )+ ":" + (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ":" + (date.getSeconds()<10?'0'+date.getSeconds():date.getSeconds())
};
User.prototype.save=function save(callback)
{
   post.create
   ({
       nickname: this.nickname,
       password:this.password,
       register_date:time.minute,
       user_id:uuid
    //time:this.time
    });
    return callback();
};

User.get=function(nickname,callback)
{
     if(!nickname)
        {
          post.findAll().then(function (user) {
               callback(user);
             })
        }
      else
        {
          post.findAll(
          {
           'where': 
           {
             'nickname': nickname
           }
           }).then(function (user_info) {
               callback(user_info[0]);
             })
        }
};

User.getAll=function(callback)
{
     post.findAll().then(function (posts) {
               callback(posts);
             })
}


