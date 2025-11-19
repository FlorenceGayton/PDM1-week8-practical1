class robot {
    constructor(x, y, w, h){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
    }

    drawHead(){
        rectMode(CORNER);
        fill(200);
        strokeWeight(4);
        rect(this.x - this.w/2 + this.w * 0.1, this.y - this.h * 0.5, this.w * 0.8, this.h * 0.5);
    }

    drawBody(){
        fill(100);
        rect(this.x - this.w/2, this.y, this.w, this.h);
    }

    drawFace(){
        fill(0);
        circle(this.x - this.w * 0.25, this.y - this.h * 0.25, this.w * 0.05);
        circle(this.x + this.w * 0.25, this.y - this.h * 0.25, this.w * 0.05);
    }

    drawArms(){
        fill(200);
        rect(this.x - this.w*0.7, this.y + this.h*0.2, this.w*0.2, this.h*0.5);
        rect(this.x + this.w*0.5, this.y + this.h*0.2, this.w*0.2, this.h*0.5);
    }

    drawWheels(){
        fill(80);
        rect(this.x - this.w*0.4, this.y + this.h * 1.1, this.w*0.2, this.h*0.5);
        rect(this.x + this.w*0.2, this.y + this.h * 1.1, this.w*0.2, this.h*0.5);
    }

    talk(micLevel){
        fill(255, 0, 0);
        rect(this.x - this.w * 0.05,
             this.y - this.h * 0.1,
             this.w * 0.1,
             micLevel * 100);
    }
}

let mic;
let micLevel = 0;

function setup(){
    createCanvas(600, 600);

    mic = new p5.AudioIn();
    mic.start();
}

function draw(){
    background(100, 225, 100);

    micLevel = mic.getLevel();

    let Robot = new robot(300, 300, 150, 100);
    Robot.drawHead();
    Robot.drawBody();
    Robot.drawFace();
    Robot.drawArms();
    Robot.drawWheels();
    Robot.talk(micLevel);
}
