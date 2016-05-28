//以上是我们引入框架模块
var express = require('express');
var router = express.Router();
var crypto = require('crypto');
var path = require('path');
var fs = require('fs');
var join = path.join;

//重复使用的变量引入
var time=require('../models/time');//引入一个定义时间格式的变量
var uid = require('../utils/uuid');//后边我们用于生成用户ID


//引入model层的表结构模块
var Mark=require('../models/mark');
var Image=require('../models/image');
var User=require('../models/user');
/******************************************
 * 前端页面：home
 * 页面名称：主页
 * 功能描述：主页展示
 * 链接界面：无
 * 链接数据库：无
 *
 */
Mark.belongsTo(User,{ foreignKey:'user_id' });
User.hasMany(Mark);
//User.sync();
//Mark.sync();
router.get('/', function(req, res, next)
{
        res.render('home', {
            title: '首页'
        });
    });
/******************************************
 * 前端页面：login
 * 页面名称：登录
 * 功能描述：医生和患者的登录
 * 链接界面：忘记密码（d_getpwd）、注册帐号（d_reg,p_reg）
 */
router.get('/login', function (req, res) {
    res.render('login', {
        title: '登录界面'
    });
});
router.get('/p_reg', function (req, res) {
    res.render('p_reg', {
        title: '注册页面'
    });
});
router.get('/jumpwait', function (req, res) {
    res.render('jumpwait', {
        title: '注册成功'
    });
});
router.get('/error', function (req, res) {
    res.render('error', {
        title: '出错啦！'
    });
});
router.get('/3dmark', function (req, res) {
    res.render('3dmark', {
        title: '标注界面'
    });
});
router.get('/test', function (req, res) {
    res.render('test', {
        title: '标注测试'
    });
});
router.get('/objmark', function (req, res) {
    res.render('objmark', {
        title: 'obj标注界面'
    });
});

router.get('/p_index', function (req, res) {
        User.findOne({'where': {'nickname': req.session.user.nickname}})
            .then(function(user){

        res.render('p_index', {
            title: '用户首页',
            user:user
        });
        })
    });
//处理p_reg的post请求
router.post('/p_reg', function (req, res) {
    //检验用户两次输入的口令是否一致
    if (req.body['password-repeat'] != req.body['password']) {
        req.flash('error', '两次输入的密码不一致');
        return res.redirect('/p_reg');//返回患者注册页面
    }
    //生成密码的 md5 值，，，用于密码的加密
    var md5 = crypto.createHash("md5");
    var password = md5.update(req.body.password).digest('base64');
    //将注册页面传递过来的参数封装到 newUser 这个对象中
    //我们创建一个User对象，并把它付给newUser

    User.findOne({'where': {'nickname': req.body.nickname}})
        .then(function(user){
            console.log(user);
            if(user){
                req.flash('error',"用户已存在");
                return res.redirect('/p_reg');
            }
            User.sync().then(function() {
                return User.create({
                    nickname: req.body.nickname,
                    password: password,
                    register_date: time.minute,
                    user_id: uid.v4()
                })
                }).then(function (user) {
                console.log("err 是"+user.nickname);
            if (!user) {
                req.flash('error', err);
                return res.redirect('/p_reg');
            }
            req.flash('success', '注册成功');
            res.redirect('/jumpwait');//注册成功后跳转到提示注册成功的页面，5秒后跳转至登录主界面
        });
    });
});

////实现登录功能
router.post('/login', function (req, res) {
    var md5 = crypto.createHash('md5');
    var nickName = req.body.nickname;//登录帐号
    var password = md5.update(req.body.password).digest('base64');//登录密码，，对应好input的name值

    if (nickName == '' || password == '') {
        req.flash('error', '请输入登录账户/登录密码！');
        return res.redirect('/login');
    }
    User.findOne({'where': {'nickname': req.body.nickname}})
        .then(function(user){
            if (!user) {
                req.flash('error', ' 用户不存在！');
                return res.redirect('/login');
            }
            if (user.password != password) {
                req.flash('error', ' 登录密码错误');
                return res.redirect('/login');
            }
            req.session.user = user;//检查成功之后我们在这把用户的信息存到session中
            req.flash('success', ' 登入成功');
            res.redirect('/p_index');//重定向到p_index页面，登录成功
        });
    });

router.post('/mark/point',function(req,res) {
    Mark.sync().then(function(){
    return Mark.create({
        mark_id:uid.v4(),
        point:req.body.point,
        text:req.body.text,
        point_id:req.body.point_id,
        image_id:1,
        user_id:req.session.user.user_id,
        mark_date:time.minute
    })
    }).then(function (mark) {
        if (!mark) {
            req.flash('error', err);
            return res.redirect('/p_err');
        }
    });

        Mark.findAll({'where': {'image_id': 1}})
            .then(function(points){
                if (!points) {
                    req.flash('error', ' 发生错误了！');
                    return res.redirect('/error');
                }
         return res.json(points);
    })
});
router.post('/mark/recovery',function(req,res) {
    console.log("进行测试1");
    Mark.findAll({'where':{'image_id':1},include:[User]})
        .then(function(points){
            //TODO 多表联立
            console.log("进行测试2");
            console.log(JSON.stringify(points));
        return res.json(points);
        })
     });
//查询当前图像最大标注id
router.post('/max/point',function(req,res) {

    Mark.max('point_id',{'where':{'image_id':1}})
        .then(function (max) {
            console.log("max"+max);
        if (0) {
            console.log(max);
            return res.redirect('/error');
        }
        return res.json(max);
    })
});
//上传用户图像
router.post('/image_upload',function(req,res) {
    Mark.sync().then(function() {
        return Image.create({
            image_id: uid.v4(),
            image_url: req.body.image_url,
            image_name: req.body.image_name,
            upload_date: time.minute,
            user_id: req.session.user.user_id
        })
        }).then(function (image) {
        if (!image) {
            req.flash('error', "添加出错");
            return res.redirect('/error');
        }
    })
});
module.exports=router;
