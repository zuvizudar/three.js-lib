var keys = {
		"up" : false,
		"down" : false,
		"left" : false,
		"right" : false
};

var update() = function(){
	if(keys.left){
    	player.rotation.y += 0.03;
    }
    if(keys.right){
    	player.rotation.y -= 0.03;
    }
}
document.addEventListener("keydown", function(evt) {

        switch(evt.keyCode) {
            case 37:
                keys.left = true;
                break;
            case 38:
                keys.up = true;
                break;
            case 39:
                keys.right = true;
                break;
            case 40:
                keys.down = true;
                break;
            case 49:
                up_flag=true;
                break;
            case 50:
                down_flag=true;
                break;
                }

});

document.addEventListener("keyup", function(evt) {

        switch(evt.keyCode) {
            case 32:
                up_flag=false;
                break;
            case 37:
                keys.left = false;
                break;
            case 38:
                keys.up = false;
                break;
            case 39:
                keys.right = false;
                break;
            case 40:
                keys.down = false;
                break;
            case 49:
                up_flag=false;
                break;
            case 50:
                aa;
                break;
                }

});
