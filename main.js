const context = document.querySelector("canvas").getContext("2d");
context.canvas.height = 720;
context.canvas.width= 1280;

const background = document.getElementById("background");
const img = new Image();
img.src = './images/henesys-background.png'

function draw(){
    context.fillRect(25,25,100,100);
    context.drawImage(img,0,0);
}