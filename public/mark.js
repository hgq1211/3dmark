/**
 * Created by Administrator on 2016/3/20 0020.
 */
//arr是个集合，用来存放svg画布上的点的id、cx、cy、text内容的

//单击图片缩略图之后克隆图片到svg
function clone(image_id,url) {
    markcount(image_id);
    img = d3.select('image');
    if (img) {
        img.remove();
        d3.selectAll('circle').remove();
        markclose();
    }
    sv.append('image').attr({
        //追加图像属性
        id: image_id,
        'xlink:href': url,
        height: '100%',
        width: '100%'
    }).on('click', function (e) { //当点击图像的某一点时出发的动作（绘制标记）
        markcount(image_id);
        var current=count+1;
        $("#submit").val(current);
         position = d3.mouse(document.getElementById(image_id));
        addcircle(current, position);
        showtextarea(position);
    })
}
//单击画圆
function addcircle(current,position) {
    sv.append('circle').attr({
        id: current,
        cx: position[0],
        cy: position[1],
        r: cr,
        fill: fillStyle,
        'stroke-width': strokeWidth,
        stroke: strokeStyle
    }).on('mouseover', function (e) {  //当鼠标移动到标记点上时触发的动作
        var point_id = this.getAttribute('id');
        $("#submit").val(point_id);
        for(var i=0;i<arr.length;i++){
            if(point_id==arr[i][0]){
            position[0]=arr[i][1];
            position[1]=arr[i][2];
            }
        }
         showcomment(position,point_id);
        //$(".panel-heading").hide();

    }).on('mouseleave', function (e) {    //当鼠标离开标记点上时触发的动作

    });
}
//单击提交按钮之后将标注信息写入后台
function addmark(){
    var text=$("#marktext").val();
    var image_id= d3.select('image').attr('id');
    var point_id=$("#submit").val();
    $.ajax({
        type: "post",
        url:"/mark/upload",
        data:{image_id:image_id,markX:position[0],markY:position[1],text:text,point_id:point_id},
        success:function(data){
            markcount(image_id);//提交之后重新计算标注数目，更新count的值
            markpoint(image_id);
            for(var i=0;i<arr.length;i++){
                if(point_id==arr[i][0]){
                    position[0]=arr[i][1];
                    position[1]=arr[i][2];
                }
            }
            showcomment(position,point_id);
            $("#marktext").val("");
        }
    })
}
//查询当前图片提交过的标注点有多少（mark_id）
function markcount(image_id) {
    $.ajax({
        type: "post",
        url: "/max/point",
        data: {image_id: image_id},
        success: function (data) {
            var id=data.max_id;
          count=id?id:0;
        }
    });
}
//读取数据库已经有标注信息，并还原到图片上
function markpoint(image_id){
    $.ajax({
        type: "post",
        url:"/mark/point",
        data:{image_id:image_id},
        success:function(data){
            $(".heading").empty();
            $.each(data, function(index, val) {
                position[0]=val.markX;
                position[1]=val.markY;
                arr[index]=[val.point_id,position[0], position[1], val.text,val.mark_date,val.d_name];
                console.log(arr[index]);
                console.log(arr.length);
                addcircle(val.point_id,position);
                //alert(val.mark_date);
            });
        }
    });
}

//隐藏标注编写框
function markclose(){
    $("#showmark").hide();
}
//按照point_id 显示同一个点下多个标注内容
function showcomment(position,point_id){
    showtextarea(position);
    $(".heading").empty();
    for(var i=0;i<arr.length;i++){
        if(arr[i][0]==point_id){
        var text=$("<h5></h5>").text(arr[i][3]);
        var name=$("<small class='pull_right'>"+arr[i][5]+"&nbsp;&nbsp;&nbsp;<time class='timeago' datetime='"+arr[i][4]+"'></time></small>").timeago();
        $("blockquote").append(text).append(name).append('<hr>');
       }
    }
}
function showtextarea(posintion){

    var writecomment=$('<div class="panel panel-default col-md-4" id="showmark">'+'<button type="button" class="close" onclick="markclose()">×</button>'+
                        '<blockquote class="heading pre-scrollable" style="padding: 0;margin:0"></blockquote>'+'<div class="panel-body" style="padding: 0;border:0">'+
                        '<div class="panel-body" style="padding: 0;border:0">'+'<textarea class="form-control" id="marktext" rows="3" placeholder="添加标注。。。"></textarea>'+
                        '<div class="span12">'+'<button class="btn btn-block btn-primary" type="button"  onclick="addmark()">提交</button>'+
                        '</div>'+'</div>'+'</div>');

    $("#showmark").remove();
    $(".svg_content").append(writecomment);
    $(".panel-default").css({"left": position[0]+45+"px", "top": position[1]+45+ "px"}).show();
}