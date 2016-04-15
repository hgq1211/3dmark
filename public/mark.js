/**
 * Created by hgq on 2016/3/30 0020.
 */

//单击添加球体标注
var particleMaterial,container;
var raycaster;
var mouse;
var position=[];
var count;
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
    markcount("1");
    //alert(count);
    var current=count+1;
    var particle = new THREE.Sprite( particleMaterial );
    console.log(particle);
    particle.position.copy( intersects);
    particle.scale.x = particle.scale.y = 8;
    particle.name=current;
    $("#point_id").val(current);

    //particle.append("text")
    //    .attr("class","forceText")
    //    .attr("x",function(){ return position[0]; })
    //    .attr("y",function(){ return position[1]; })
    //    .attr("dy", ".4em")
    //    //.attr("dx", "-.4em")
    //    .text(function(){ return current; });
    scene.add( particle );
}

//提交当前标注信息
function savemark(mark){
    var point=JSON.stringify(mark);
    var text=$("#marktext").val();
    var point_id=$("#point_id").val();
    $.ajax({
        type: "post",
        url: "/mark/point",
        dataType:"json",
        data: {point:point,text:text,point_id:point_id},
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
            showcomment(data);
            $.each(data, function (index, val) {
                particle(JSON.parse(val.point));
            })
        }
    });
}
//初始化鼠标事件
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
        particle(intersects[0].point );
        position[0]=intersects[0].point.x;
        position[1]=intersects[0].point.y;
        console.log(position);
        $("#edit").remove();
        showtextarea(intersects[0].point);
    }
}

function onDocumentMouseOver(event){
    //event.preventDefault();
    alert("over");
}

//查询当前图片提交过的标注点有多少（mark_id）
function markcount(image_id) {

    $.ajax({
        type: "post",
        url: "/max/point",
        data: {image_id: image_id},
        success: function (data) {
            var id=data;
          count=id?id:0;
        }
    });
}

//隐藏标注编写框
function markclose(){
    $("blockquote").hide();
}
function editclose(){
    $("#edit").hide();
}
//按照point_id 显示同一个点下多个标注内容
function showcomment(data){
            $(".heading").empty();
            $.each(data, function(index, val){
                var text=$("<h4 style='text-align: left'></h4>").text("ID "+val.point_id+":  "+val.text);
                var name=$("<small class='pull-right'>"+val.nickname+"&nbsp;&nbsp;&nbsp;<time class='timeago' datetime='"+val.mark_date+"'></time></small>").timeago();
                $("blockquote").append(text).append(name).append('<hr>');
            });
   if(!data.length){
                 $("blockquote").append("<h4>暂无标注，您可以单击图像任一点开始标注！！</h4>");
            }
        }

function showtextarea(point){
    this.point=point;
    var writecomment=$('<div style="padding: 0;border:0" id="edit">'+
        '<button type="button" class="close" onclick="editclose()" >×</button>'+
        '<textarea class="form-control" id="marktext" rows="3" placeholder="添加标注。。。"></textarea>'+
        '<div class="span12">'+'<button class="btn btn-block btn-primary" type="button" id="submit" onclick="savemark(point);editclose()">提交</button>'+
        '</div>'+'</div>');

    $('#markpoint').append(writecomment);

    //$("#eddit").css({"right": 10+"px", "bottom": 152+ "px"}).show();
}
function empty(){
    if(!$("#marktext").val()){

        $("#submit").attr({
            "disabled":"disabled"
        });
    }
}