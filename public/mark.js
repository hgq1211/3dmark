/**
 * Created by hgq on 2016/3/30 0020.
 */

//单击添加球体标注
var spriteMaterial,container;
var raycaster;
var mouse;
var position=[];
var count;
raycaster = new THREE.Raycaster();
mouse = new THREE.Vector2();
var PI2 = Math.PI * 3;
    spriteMaterial = new THREE.SpriteMaterial({
        color: 0x0000ff,
        map: function ( context ) {
            context.beginPath();
            context.arc( 0, 0, 0.5, 0, PI2, true );
            context.fill();
        }
    });

function particle(intersects){
    markcount(1);
    var current=count?(count+1):1;
    spriteMaterial.map.offset = new THREE.Vector2(0.2, 0);
    spriteMaterial.map.repeat = new THREE.Vector2(1 / 5, 1);
    spriteMaterial.depthTest = false;
    spriteMaterial.blending = THREE.AdditiveBlending;
    var sprite = new THREE.Sprite(spriteMaterial);
    sprite.scale.set(2, 2, 1);
    sprite.position.copy(intersects);
    sprite.velocityX = 5;
    console.log("sprite");
    console.log(sprite);
    scene.add(sprite);
    $("#point_id").val(current);
}

//提交当前标注信息
function savemark(mark){
    var point=JSON.stringify(mark);
    var text=$("#marktext").val();
    var point_id=$("#point_id").val();
    console.log("text"+text+"point_id"+point_id+"point"+point);
    $.ajax({
        type: "post",
        url: "/mark/point",
        dataType:"json",
        beforeSend:function(){
            if(!text){
        $("#marktext").focus();
                return false;
            }
        },
        data: {point:point,text:text,point_id:point_id},
        success: function (data) {
            $("#marktext").val("")
                          .focus();
            recovery();
            //alert("success");
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
    window.addEventListener('mouseover', onDocumentMouseOver, false);
    window.addEventListener('resize', onWindowResize, false);
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize( window.innerWidth, window.innerHeight );

}

function onDocumentMouseDown( event ) {
    event.preventDefault();
    if (this instanceof THREE.Sprite){
        alert("over");
    }
    mouse.x = ( event.clientX / renderer.domElement.clientWidth ) * 2 - 1;
    mouse.y = - ( event.clientY / renderer.domElement.clientHeight ) * 2 + 1;
    raycaster.setFromCamera( mouse, camera );
    var intersects = raycaster.intersectObjects(objects,true);
    console.log("intersects"+intersects);
    if (intersects.length > 0) {
        particle(intersects[0].point );
        //alert(intersects[0].point.x);
        position[0]=intersects[0].point.x;
        position[1]=intersects[0].point.y;
        //$("#edit").remove();
        //alert("x的坐标为"+position[0]);
        showtextarea(intersects[0].point);
    }
}

function onDocumentMouseOver(event){
    event.preventDefault();
    if (event instanceof THREE.Sprite){
    alert("over");
    }
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
                var name=$("<small class='pull-right'>"+val.user_info.nickname+"&nbsp;&nbsp;&nbsp;<time class='timeago' datetime='"+val.mark_date+"'></time></small>").timeago();
                $("blockquote").append(text).append(name).append('<hr>');
            });
   if(!data.length){
                 $("blockquote").append("<h4>未查询到任何标注信息，您可以单击图像任一点开始标注！！</h4>");
            }
        }

function showtextarea(point){
    this.point=point;
    //console.log(point);
    var writecomment=$('<div style="padding: 0;border:0" id="edit">'+
        '<button type="button" class="close" onclick="editclose()" >×</button>'+
        '<textarea class="form-control" id="marktext" rows="3" placeholder="添加标注。。。"></textarea>'+
        '<div class="span12">'+'<button class="btn btn-block btn-primary" type="button" id="submit" onclick="savemark(point)">提交</button>'+
        '</div>'+'</div>');

    $('#markpoint').append(writecomment);

    //$("#eddit").css({"right": 10+"px", "bottom": 152+ "px"}).show();
}
