var load_player = function(){
        var loader = new THREE.JSONLoader();
        loader.load("your 3d-model in json or js format",function(geometry,materials){
            materials.forEach((material)=>{
                        material.skinning=true;
            });
            player=new THREE.SkinnedMesh(
                        geometry,
                        new THREE.MeshFaceMaterial(materials)
            );

			//animation record
            mixer =new THREE.AnimationMixer(player);
            for(var i=0;i<geometry.animations.length;i++){
                for(var j=0;j<geometry.animations[i].tracks[0].values.length;j+=3){
                    geometry.animations[i].tracks[0].values[j+2]=0;
                }
            }
            for(var i=0;i<geometry.animations.length;i++){
                action[i]=mixer.clipAction(geometry.animations[i]);
			}
            scene.add(player);
        });
}

var update = function(){
	requestAnimationFrame(update);
	action[0].play();
	var delta = clock.getDelta();
	mixer.update(delta);
	renderer.render(scene,camera);
}

