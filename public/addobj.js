/**
 * Created by Administrator on 2016/3/30.
 */
var container, stats;
var camera, scene, renderer;
var title='3D mark';
var objects = [];
$(function () {
    container = document.createElement('div');
    container.id="obj";
    document.body.appendChild( container );
    var info = document.createElement('div');
    info.style.position = 'absolute';
    info.style.top = '10px';
    info.style.width = '100%';
    info.style.textAlign = 'center';
    info.innerHTML=title;
    container.appendChild( info );
    renderer = new THREE.CanvasRenderer();
    renderer.setClearColor( 0xf0f0f0 );

    renderer.setSize( window.innerWidth, window.innerHeight );
    container.appendChild( renderer.domElement );
    camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 10000 );
    camera.position.set( -300, 500, 500 );

    scene = new THREE.Scene();

    var geometry = new THREE.BoxGeometry( 200, 200,200 );

    var cube = new THREE.Mesh( geometry, new THREE.MeshBasicMaterial( { color: 0x000000, opacity: 0.8 } ) );
    cube.position.set=(0, 0, 0);
    //cube.rotation.y = Math.random() * 2 * Math.PI;
    scene.add( cube );
    objects.push( cube );
    console.log("cube输出为：");
    console.log(objects);
    console.log("cube输出结束：");

    animate();
    recovery();
    raycater();
});

function animate() {
        requestAnimationFrame( animate );
        render();
}
var theta = 0;
function render() {
    theta += 1;

    //camera.position.x =theta;
    //camera.position.y =theta;
    camera.lookAt( scene.position );
    renderer.render( scene, camera );
}
