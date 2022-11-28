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

export class Player {
    constructor(game){
        this.game = game;
        this.width = 39;
        this.height = 64;
        this.x = 0;
        this.y = 100;
    }
    update(){

    }
    draw(context){
        context.fillRect(this.x, this.y, this.width, this.height);

    }
}


const player = {
    height: 64,
    jumping: true,
    width: 39,
    x: 0,
    xVelocity:0,
    y:0,
    yVelocity: 0,

};


export const playerAnimations = {
    walk:{
        frames: 4,
        leftWalk: [leftWalk2_0, leftWalk2_1, leftWalk2_2, leftWalk2_3, leftWalk2_4],
        rightWalk: [rightWalk2_0, rightWalk2_1, rightWalk2_2, rightWalk2_3, rightWalk2_4]
    }
}
