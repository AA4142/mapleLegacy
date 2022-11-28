//import { playerAnimations } from "./player"; 


const context = document.querySelector("canvas").getContext("2d");

context.canvas.height = 720;
context.canvas.width = 1280;

const playerLeft = document.getElementById("playerLeft");

const playerRight = document.getElementById("playerRight");

const backgroundLayer1 = document.getElementById("backgroundLayer_1");

const leftWalk2_0 = document.getElementById("leftWalk2_0");
const leftWalk2_1 = document.getElementById("leftWalk2_1");
const leftWalk2_2 = document.getElementById("leftWalk2_2");
const leftWalk2_3 = document.getElementById("leftWalk2_3");
const leftWalk2_4 = document.getElementById("leftWalk2_4");

const rightWalk2_0 = document.getElementById("rightWalk2_0")
const rightWalk2_1 = document.getElementById("rightWalk2_1")
const rightWalk2_2 = document.getElementById("rightWalk2_2")
const rightWalk2_3 = document.getElementById("rightWalk2_3")
const rightWalk2_4 = document.getElementById("rightWalk2_4")

let gameFrame = 1;

const player = {
    height: 64,
    jumping: true,
    right: false,
    width: 39,
    x: 0,
    xVelocity:0,
    y:0,
    yVelocity: 0,

    frames : 4,
    rightWalk : [rightWalk2_0, rightWalk2_1, rightWalk2_2, rightWalk2_3, rightWalk2_4],
    leftWalk : [leftWalk2_0, leftWalk2_1, leftWalk2_2, leftWalk2_3, leftWalk2_4]
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
        player.xVelocity -= 0.2;
        player.right = false;
    }

    if(controller.right){
        player.xVelocity += 0.2;
        player.right = true;
        console.log("right");
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

    
    const staggerFrames = 16;

    //draw background
    context.clearRect(0,0, 1280, 720);
    let position = Math.floor(gameFrame/staggerFrames) % 5

    context.drawImage(backgroundLayer1 ,0 , -200);

    if(player.right != true){
        context.drawImage(player.leftWalk[position], player.x, player.y);
    }else{
        context.drawImage(player.rightWalk[position], player.x, player.y);
        
    }
    context.drawImage(player.rightWalk[position], 100, 100);


    gameFrame++;
    window.requestAnimationFrame(loop);

};

window.addEventListener("keydown", controller.keyListener);
window.addEventListener("keyup", controller.keyListener);
window.requestAnimationFrame(loop);






