var renderer,scene,camera,light;
var init_stage = function(){
	renderer = new THREE.WebGLRenderer();
	renderer.setSize(800,600);
	document.body.appendChild(renderer.domElement);
	scene=new THREE.Scene();
	camera = new THREE.PerspectiveCamera(75,800/600,1,10000);
	camera.lookAt(new THREE.Vector3(0,0,0));
	camera.position.z=100;
	camera.position.x=0;
	camera.position.y=50;

	light = new THREE.DirectionalLight(0xffffff);
	light.position.set(1,1,1);
	scene.add(light);
	grid_init();
}

grid_init = function(){
	size = 500;
	var divisions = 250;
	var gridHelper = new THREE.GridHelper( size, divisions );
	scene.add( gridHelper );
}
