let x = 50;
let y = 50;
let speedX = 3;
let speedY = 3;

function preload(){
    soundFormats('wav');
    boing = loadSound('assets/159376__greenhourglass__boing1.wav');
}


function setup() {
    createCanvas(600, 400);
}

function draw() {
    background(255);
    circle(x, y, 100);
    if (x < 50 || x > width - 50) {
        boing.play();
        speedX *= -1;
    }
    if (y < 50 || y > height - 50) {
        boing.play();
        speedY *= -1;
    }
    x += speedX;
    y += speedY;
}
