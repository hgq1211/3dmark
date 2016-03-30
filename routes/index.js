var express = require('express');
var router = express.Router();
var crypto = require('crypto');
var config = require('../config');
var path = require('path');
var fs = require('fs');
var join = path.join;
//以上是我们引入框架模块
//var t = require('../models/t_patient_info');
//现在我们把刚才创建的user。js引入到这里
var User=require('../models/user');
var Point=require('../models/markPoint');

/******************************************
 * 前端页面：home
 * 页面名称：主页
 * 功能描述：主页展示
 * 链接界面：无
 * 链接数据库：无
 *
 */

router.get('/', function (req, res) {
    res.render('home', {
        title: '登录界面',
       });
    });
/******************************************
 * 前端页面：login
 * 页面名称：登录
 * 功能描述：医生和患者的登录
 * 链接界面：忘记密码（d_getpwd）、注册帐号（d_reg,p_reg）
 * 链接数据库：models/t_patient_info.js(检查患者用户登录信息是否正确)
 *           models/t_doctor_info.js(检查医生用户登录信息是否正确)
 *
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
//req.session.user.p_nickname从我们刚才存进session的数据里面取出用户名，，调用get方法，，后边的user参数是我们返回时的数据对象
router.get('/p_index', function (req, res) {
    User.get(req.session.user.p_nickname,function(err,user) {
        if (err) {
            res.redirect('/login');
        }
        //我们在函数执行成功时将user数据对象渲染到前端
        res.render('p_index', {
            title: '用户首页',
            user:user//这两个名字是一样的
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
    var newUser = new User({
        p_nickname: req.body.nickname,
        password:password//密码我们是在上边加密时获取的，方法跟用户名一样，这时的密码已经经过了加密处理
    });

    //检查用户名是否已经存在
    User.get(newUser.p_nickname, function (err, user) {
        if (user) {
            req.flash('error', '用户已存在!');
            return res.redirect('/p_reg');//返回患者注册页，，，如果已注册  我们就返回去让用户重新填写，，，当然这只是最基本的做法
        }
        console.log(user);//这里是打印的我们查询后返回的数据
        // 如果没有用户使用这个用户名 那么我们就吧用户提交的信息保存到数据库去
        newUser.save(function (err) {
            if (err) {
                req.flash('error', err);
                return res.redirect('/p_index');//注册失败返回患者注册页
            }
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
        User.get(nickName, function (err, user) {
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
    var mark = new Point({
        point:req.body.point,
        image_id:'1'
    });
    console.log(req.body.point);
    mark.save(function (err) {
        if (err) {
            req.flash('error', err);
            return res.redirect('/p_err');
        }
    });
    Point.get('1', function (err, points) {
        if (err) {
            console.log(err);
            return res.redirect('/p_err');
        }
        return res.json(points);
    })
});
router.post('/mark/recovery',function(req,res) {

    Point.get('1', function (err, points) {
        if (err) {
            console.log(err);
            return res.redirect('/p_err');
        }
        return res.json(points);
    })
});
module.exports=router;

//router.get('/login', function (req, res) {

//    res.render('login', {
//        title: '登录界面',
//        success: req.flash('success').toString(),
//        error: req.flash('error').toString()
//    });
//});
////实现登录功能
//router.post('/login', function (req, res) {
//    var md5 = crypto.createHash('md5');
//    var nickName = req.body.nickname;//登录帐号
//    var password = md5.update(req.body.password).digest('base64');//登录密码
//
//    if (nickName == '' || password == '') {
//        req.flash('error', '请输入登录账户/登录密码！');
//        return res.redirect('/login');
//    }
//        t.get(nickName, function (err, user) {
//            if (!user) {
//                req.flash('error', ' 用户不存在！');
//                return res.redirect('/login');
//            }
//            if (user.password != password) {
//                req.flash('error', ' 登录密码错误');
//                return res.redirect('/login');
//            }
//            req.session.user = user;
//            req.flash('success', ' 登入成功');
//            res.redirect('/p_index');
//        });
//});
//router.get('/p_index', function (req, res) {
//    t.get(req.session.user.p_nickname,function(err,user){
//        if(err){
//            res.redirect('/login');
//        }
//        res.render('p_index', {
//            title: '患者主页',
//            user:user
//        });
//    })
//});
//router.get('/p_reg', function (req, res) {
//    res.render('p_reg', {
//        title: '注册页面'
//    });
//});
//router.get('/jumpwait', function (req, res) {
//    res.render('jumpwait', {
//        title: '注册成功'
//    });
//});
//
//router.post('/p_reg', function (req, res) {
//    //检验用户两次输入的口令是否一致
//    if (req.body['password-repeat'] != req.body['password']) {
//        req.flash('error', '两次输入的密码不一致');
//        return res.redirect('/p_reg');//返回患者注册页面
//    }
//    //生成密码的 md5 值
//    var md5 = crypto.createHash("md5");
//    var password = md5.update(req.body.password).digest('base64');
//    //将注册页面传递过来的参数封装到 newUser 这个对象中
//    var newUser = new t({
//        p_nickname: req.body.nickname,
//        password:password
//    });
//
//    //检查用户名是否已经存在
//    t.get(newUser.p_nickname, function (err, user) {
//        if (user) {
//            req.flash('error', '用户已存在!');
//            return res.redirect('/p_reg');//返回患者注册页
//        }
//        console.log(user);
//        // 如果数据库中不存在这个新用户名，则新增患者用户
//        newUser.save(function (err) {
//            if (err) {
//                req.flash('error', err);
//                return res.redirect('/p_index');//注册失败返回患者注册页
//            }
//            console.log("11111");
//            res.redirect('/jumpwait');//注册成功后跳转到提示注册成功的页面，5秒后跳转至登录主界面
//        });
//    });
//});
//
