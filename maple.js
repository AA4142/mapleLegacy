const context = document.querySelector("canvas").getContext("2d");
context.canvas.height = 720;
context.canvas.width = 1280;

const playerSprite = document.getElementById("daGoat");

context.fillStyle = "blue";
context.fillRect(0,0, 1280, 720);
context.drawImage(playerSprite, 50, 50);


function animate(){
    context.clearRect(0, 0, 1280, 720);
    
}

/*
const controller = {
    left: false,
    right: false,
    up: false,
    keyListener: function (event){
        var key_state = (event.type =="keydown") ? true : false;

        switch(event.keyCode){

            case 37:
                controller.left = key_state;
                break;
            case 70:
                controller.up = key_state;
                break;
            case 39:
                controller.right = key_state;
                break;
        }
    }

}

const loop = function(){
    if(controller.up && player.jumping == false){
        player.yVelocity -= 20;
        square.jumping = true;
    }

    if(controller.left){
        player.xVelocity -= 0.5;
    }

    if(controller.right){
        player.xVelocity += 0.5;
    }

    player.yVelocity += 1.5;
    player.x += player.xVelocity;
    player.y += player.yVelocity;
    player.xVelocity *= 0.9;
    player.yVeloicty *= 0.9;
}

*/
//the loop function should get values from a map that set borders etc