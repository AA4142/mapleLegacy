const context = document.querySelector("canvas").getContext("2d");
context.canvas.height = 720;
context.canvas.width = 1280;


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

const player = {
    height: 64,
    jumping: true,
    width: 39,
    x: 0,
    xVelocity:0,
    y:0,
    yVelocity: 0,

};


const playerAnimations = {
    walk:{
        frames: 5,
        leftWalk: {leftWalk2_0, leftWalk2_1, leftWalk2_2, leftWalk2_3, leftWalk2_4},
        rightWalk: [rightWalk2_0, rightWalk2_1, rightWalk2_2, rightWalk2_3, rightWalk2_4]
    }
}

let frameX = 0;
let frameY = 0;


function animate(){
    context.clearRect(0,0,1280, 720);
    context.drawImage(playerAnimations.walk.rightWalk[frameX], 300, 300);
    if(frameX < playerAnimations.walk.frames){
        frameX++;
    }else{
        frameX = 0;
    }

    requestAnimationFrame(animate);
}

animate();