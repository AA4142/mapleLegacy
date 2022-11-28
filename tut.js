const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = 1280;
const CANVAS_HEIGHT = canvas.height = 720;

//create player object
const rightWalk2_0 = document.getElementById("rightWalk2_0");
const rightWalk2_1 = document.getElementById("rightWalk2_1");
const rightWalk2_2 = document.getElementById("rightWalk2_2");
const rightWalk2_3 = document.getElementById("rightWalk2_3");
const rightWalk2_4 = document.getElementById("rightWalk2_4");




const player = {
    frames : 4,
    rightWalk : [rightWalk2_0, rightWalk2_1, rightWalk2_2, rightWalk2_3, rightWalk2_4]
}


let gameFrame = 0;
const staggerFrames = 12;

function animate(){
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

    let position = Math.floor(gameFrame / staggerFrames) % 5
    console.log(position);
    ctx.drawImage(player.rightWalk[position], 100, 100);


    gameFrame++;
    requestAnimationFrame(animate);
};

animate();