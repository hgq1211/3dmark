版本2.3.0 / 2016-02-19/王富成
==================
* * * 
##安装使用##
  * 数据库导入：将根目录中的medicalprogect.sql导入至本地数据库
  * 数据库设置：更改根目录setting.js文件中的db设置
  ![](http://7xosct.com1.z0.glb.clouddn.com/6.png)
  * 启动项目：<br>(1)方式一：cmd>cd进入根目录，node ./bin/www<br/>(2)方式二：webstorm打开文件，bin/www.js,右键run'bin\www'<br/>(3)若出现错误，则将启动node的路径更改为当前电脑nodeJs安装路径即可。
  * 浏览器打开：http://localhost:3000/
  * 管理员登录入口放在home主页，仅仅是为了能方便测试

##更新##
  * 1、将原有项目搬迁到express 4.13.1版本
  * 2、目录模块化
  ![](http://7xosct.com1.z0.glb.clouddn.com/4.png)
  * 3、页面模块化，将整体页面进一步的封装成3大模块：head、header、body
  ![](http://7xosct.com1.z0.glb.clouddn.com/5.png)
  * 4、添加home.html:用于主页显示功能，用于用户登录导入。内容待填充。
  ![](http://7xosct.com1.z0.glb.clouddn.com/2.png)
  * 5、登录界面login.html:<br/>（1）添加大量随机验证码，后面将会引入更高级的图片验证<br/>（2）登录提示错误方面添加了很多的交互
  * 6、资料上传页面p\_medical\_info.html:添加资料注释的保存
  * 7、添加固定在地步的footer栏目，内容待填充。
  * 8、将面板添加收缩功能，如下图
  ![](http://7xosct.com1.z0.glb.clouddn.com/1.png)
  * 9、医生主页d_index.html：美化UI界面、添加面板收缩功能
  ![](http://7xosct.com1.z0.glb.clouddn.com/3.png)
 
##下一步##
  * 使用nodemailer进行邮件验证，用于找回密码和登陆。测试demo已完成。
  * d_mark界面进行多样式标记
  * 添加在线即时聊天和留言功能
  * 封装后台功能代码
  * 考虑安全性问题和角色权限性问题

