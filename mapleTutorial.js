import { Player } from './player.js';

window.addEventListener('load', function(){
    const canvas = document.getElementById('canvas1');
    const context = canvas.getContext('2d');
    canvas.width = 1280;
    canvas.height = 720;

    class Game{
        constructor(width, height){
            this.width = width;
            this.height = height;
            this.player = new Player(this);
        }
        update(){

        }
        draw(context){
            this.player.draw(context);
            
        }
    }

    const game = new Game(canvas.width, canvas.height);
});