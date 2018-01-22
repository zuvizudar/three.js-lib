//GamePadAPI
var pad_func = function(){
	var pads = navigator.getGamepads ? navigator.getGamepads() :
		(navigator.webkitGetGamepads ? navigator.webkitGetGamepads : []);
	pads = pads[0];
	if(pads) {
		//buttons
		var but = [];
		for(var i = 0 ; i < pads.buttons.length; i++) {
			var val = pads.buttons[i];
			var pressed = val == 1.0;
			if (typeof(val) == "object") {
				pressed = val.pressed;
				val     = val.value;
			}
			but[i] = val;
		}
		var axes=pads.axes;
		//axes にスティック
		//but  にボタン情報
		pushed(but);
		move(axes)
	}
}

var pushed = function(but){
	for(var i = 0;i<but.size;i++){
		if(but[i]){
			console.log(pushed,i);
		}
	}
}
//モーハンのプレイヤー&カメラの動きっぽくなります。
var move = function(axes){
	var to=player.position.clone();
	var move_flag=false;

	//左手スティック
	if(Math.abs(axes[0])>0.2){ //スティックの微妙な動きを無視
		to.x-=axes[0];
		move_flag=true;
	}
	if(Math.abs(axes[1])>0.2){
		to.z-=axes[1];
		move_flag=true;
	}

	if(move_flag){ 
		//change angle 
		var tmp=new THREE.Vector3();
		tmp.copy(to);
		tmp.sub(player.position);
		tmp.normalize();
		var angle=Math.atan2(tmp.x,tmp.z);
		player.rotation.y=angle+camera_rot/10;
		//move
		var DX = 1;
		var new_rot=player.rotation.y+Math.PI/2;
		var deltax=Math.cos(new_rot)*DX;
		var deltaz=Math.sin(new_rot)*DX;

		player.position.x-=deltax;
		player.position.z+=deltaz;
		camera.position.x-=deltax;
		camera.position.z+=deltaz;
	}

	if(Math.abs(axes[2]-0)>0.2){ //右手スティック
		camera_rot-=axes[2];
		camera.position.x=player.position.x+(-30*Math.sin(camera_rot/10));
		camera.position.z=player.position.z+(-30*Math.cos(camera_rot/10));
	}
}
