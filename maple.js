const context = document.querySelector("canvas").getContext("2d");
context.canvas.height = 720;
context.canvas.width = 1280;

const playerSprite = document.getElementById("daGoat");

context.fillStyle = "blue";
context.fillRect(0,0, 1280, 720);

/*

let frameX = 0;
let frameY = 0;
let gameFrame = 0;
const staggerFrames = 5;

function animate(){
    context.clearRect(0, 0, 1280, 720);
    context.drawImage(playerSprite, 50, 50);
    if (gameFrame % staggerFrames == 0){

    }

    gameFrame++;
    requestAnimationFrame(animate);
    
};
animate();
*/

const player = {
    height: 64,
    jumping: true,
    width: 39,
    x: 0,
    xVelocity:0,
    y:0,
    yVelocity: 0
}

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

};

const loop = function(){
    if(controller.up && player.jumping == false){
        player.yVelocity -= 15;
        player.jumping = true;
    }

    if(controller.left){
        player.xVelocity -= 0.4;
    }

    if(controller.right){
        player.xVelocity += 0.4;
    }

    player.yVelocity += 1;
    player.x += player.xVelocity;
    player.y += player.yVelocity;
    player.xVelocity *= 0.9;
    player.yVeloicty *= 0.9;

    if(player.y > 720 - 64 - 32){

        player.jumping = false;
        player.y =  720 - 64- 32;
        player.yVelocity = 0;
    }

    if(player.x < 0){
        player.x = 0;
    }else if(player.x > 1180){
        player.x = 1180;
    }

    //draw background
    context.fillStyle="blue";
    context.fillRect(0, 0, 1280, 720);

    //draw player
    context.drawImage(playerSprite, player.x, player.y);

    window.requestAnimationFrame(loop);




};

window.addEventListener("keydown", controller.keyListener);
window.addEventListener("keyup", controller.keyListener);
window.requestAnimationFrame(loop);

