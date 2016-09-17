/**
 * Created by Administrator on 2016/8/29.
 */
var Redis=require('ioredis');
var async=require('async');
var redis=new Redis(6379,'127.0.0.1');
var fs=require('fs');
var csv=require('csv');
redis.set('people','bar');
redis.get('people',function(err,fooValue){
    console.log(fooValue);
});
async.waterfall([
    function (callback) {
        redis.get('peple:2:home',callback);
    },
    function (home,callback) {
        redis.hget('locations',home,callback);
    },
    function(address,callback){
        async.parallel([
            function (callback){
                redis.exists('address:'+address,callback);
            },
            function(callback){
                redis.exists('backup.address:'+address,callback);
            },
        ], function(err,results){
            if(results[0]){
                console.log('kkkk。');
            }else{
                console.log('qqqqq');
            }
        })
    }
]);
var pub=new Redis();
var sub=new Redis();
sub.subscribe('chat',function(){
    pub.publish('chat','hi');
})
sub.on('message',function(channel,message){
    console.log('收到'+channel+'频道的信息'+message);
});
csv.parse(fs.readFileSync('ip.csv','utf8'),function(err,records){
    records.forEach(function(record){
        importIp(record);
    })
})
function importIp(data){
    var location=data[0];
    var minIp=convertIptoNumber(data[1]);
    var maxIp=convertIptoNumber(data[2]);
redis.zadd('ip',minIp,'*'+location,maxIp,location);
}
function convertIptoNumber(ip){
    var result='';
    ip.split('.').forEach(function(item){
        item=~~item;
        item=item.toString(2);
        item=pad(item,8);
        result+=item;
    })
    return parseInt(result,2);
}
function pad(num,n){
    var len=num.length;
    while(len<n){
        num='0'+num;
        len++;
    }
    return num;
}
var readline=require('readline');
var rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout
})
rl.setPrompt('IP> ');
rl.prompt();
rl.on('line',function(line){
    ip=convertIptoNumber(line);
    redis.zrangebyscore('ip',ip,'+inf','limit','0','1',function(err,result){
        if(!Array.isArray(result)||result.lenght==0){
            console.log('No data;')
        } else{
            var location=result[0];
            if(location[0]==='*'){
                console.log('no data');
            }else {
                console.log(location);
            }
        }
        rl.prompt();
    });
})