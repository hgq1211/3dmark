/**
 * Created by hgq on 2016/3/30 0020.
 */

//单击添加球体标注
var particleMaterial,container;
var raycaster;
var mouse;
var position=[];
raycaster = new THREE.Raycaster();
mouse = new THREE.Vector2();

var PI2 = Math.PI * 2;
    particleMaterial = new THREE.SpriteCanvasMaterial( {
        color: 0x0000ff,
        program: function ( context ) {
            context.beginPath();
            context.arc( 0, 0, 0.5, 0, PI2, true );
            context.fill();
        }
    });
function particle(intersects){
    var particle = new THREE.Sprite( particleMaterial );
    particle.position.copy( intersects);
    particle.scale.x = particle.scale.y = 8;
    particleMaterial.addEventListener('mouseover', onDocumentMouseOver, false);
    scene.add( particle );
}

//提交当前标注信息
function savemark(mark){
    alert(mark);
    var point=JSON.stringify(mark);
    var text=$("#marktext").val();
    console.log("dnsdiani"+point);
    $.ajax({
        type: "post",
        url: "/mark/point",
        dataType:"json",
        data: {point:point,text:text},
        success: function (data) {
            recovery();
        }
    })
}
//将数据库中的标注信息还原出来
function recovery() {
    $.ajax({
        type: "post",
        url: "/mark/recovery",
        dataType: "json",
        data: {image_id: "1"},
        success: function (data) {
            $.each(data, function (index, val) {
                particle(JSON.parse(val.point));
            })
        }
    });
}
function raycater() {

    var obj = document.getElementById("obj");
    obj.addEventListener('mousedown', onDocumentMouseDown, false);
    obj.addEventListener('touchstart', onDocumentTouchStart, false);
    window.addEventListener('resize', onWindowResize, false);
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize( window.innerWidth, window.innerHeight );

}

function onDocumentTouchStart( event ) {
    event.preventDefault();
    event.clientX = event.touches[0].clientX;
    event.clientY = event.touches[0].clientY;
    onDocumentMouseDown( event );

}

function onDocumentMouseDown( event ) {
    event.preventDefault();
    mouse.x = ( event.clientX / renderer.domElement.clientWidth ) * 2 - 1;
    mouse.y = - ( event.clientY / renderer.domElement.clientHeight ) * 2 + 1;
    raycaster.setFromCamera( mouse, camera );
    var intersects = raycaster.intersectObjects( objects );

    if ( intersects.length > 0 ) {
        console.log(intersects[0]);

        particle(intersects[ 0 ].point );
        position[0]=intersects[0].point.x;
        position[1]=intersects[0].point.y;
        console.log(position);
        showtextarea(intersects[0].point,position);
    }
}

function onDocumentMouseOver(event){
    event.preventDefault();
    alert("over");
}



function addpoint(current,position) {
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
    })
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
function showtextarea(point,position){
    this.point=point;
    var writecomment=$('<div class="panel panel-default col-md-2" id="showmark">'+'<button type="button" class="close" onclick="markclose()">×</button>'+
                        '<blockquote class="heading pre-scrollable" style="padding: 0;margin:0"></blockquote>'+'<div class="panel-body" style="padding: 0;border:0">'+
                        '<div class="panel-body" style="padding: 0;border:0">'+'<textarea class="form-control" id="marktext" rows="3" placeholder="添加标注。。。"></textarea>'+
                        '<div class="span12">'+'<button class="btn btn-block btn-primary" type="button"  onclick="savemark(point)">提交</button>'+
                        '</div>'+'</div>'+'</div>');

    $("#showmark").remove();
    $('body').append(writecomment);
    $(".panel-default").css({"left": 20+"px", "top": 30+ "px"}).show();
}