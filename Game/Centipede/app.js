"use strict";
let map = [
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", "S", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
];

let ctx = document.getElementById("field").getContext("2d");

class Shooter{
    constructor(){
        this.img = document.getElementById("shooter");
        this.x = Math.floor(map[0].length / 2);
        this.y = map.length - 2;
        this.life = 3;
    }

    move(e){
        let cx = this.x; let cy = this.y;
        let nx = cx;     let ny = cy;
        
        switch (e.key){
            case "w": 
            case "ArrowUp":// move up
                if(cy == 1) break;
                nx = cx;
                ny = cy - 1;
                break;
            case "d": 
            case "ArrowRight":// move right
                if(cx == map[cy].length - 1) break;
                nx = cx + 1;
                ny = cy;
                break;
            case "s": 
            case "ArrowDown":// move down
                if(cy == map.length - 1) break;
                nx = cx;
                ny = cy + 1;
                break;
            case "a": 
            case "ArrowLeft":// move left
                if(cx == 0) break;
                nx = cx - 1;
                ny = cy;
                break;
        }
        map[cy][cx] = " ";
        map[ny][nx] = "S";
        this.x = nx;
        this.y = ny;
        this.draw();
    }
    shoot(){

    }
    isCol(){

    }
    draw(){
        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, 750, 800);
        ctx.drawImage(this.img, this.x * 50, this.y * 50, 50, 50);
    }
}

class Centipede{

}

class Mashroom{

}

class Flea{

}

class Spider{

}

class Scorpion{

}

function init(){
    let shooter = new Shooter();
    shooter.draw();
    window.onkeydown = (e) => {
        shooter.move(e)
    }
}