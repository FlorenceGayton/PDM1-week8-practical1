class Square {
    x;
    y;
    w;
    h;

    constructor(w = 50, h = 50) {
        this.w = w;
        this.h = h;
        this.x = random(0, width - w);
        this.y = random(0, height - h);
    }

    drawSquare() {
        fill(0, 0, 225);
        rect(this.x, this.y, this.w, this.h);
    }

    isClicked() {
        return (
            mouseX > this.x &&
            mouseX < this.x + this.w &&
            mouseY > this.y &&
            mouseY < this.y + this.h
        );
    }

    click() {
        let freq = map(this.x, 0, width, 100, 800);
        let amp = map(this.y, 0, height, 0.0, 0.5);

        // smooth transition
        osc.freq(freq, 0.1);
        osc.amp(amp, 0.1);
    }
}

let osc;
let s1, s2, s3, s4, s5;

function setup() {
    createCanvas(600, 600);

    // Correct oscillator
    osc = new p5.SinOsc();
    osc.start();
    osc.amp(0); // start silent

    // Create squares
    s1 = new Square();
    s2 = new Square();
    s3 = new Square();
    s4 = new Square();
    s5 = new Square();
}

function draw() {
    background(220);

    s1.drawSquare();
    s2.drawSquare();
    s3.drawSquare();
    s4.drawSquare();
    s5.drawSquare();
}

function mousePressed() {
    if (s1.isClicked()) s1.click();
    if (s2.isClicked()) s2.click();
    if (s3.isClicked()) s3.click();
    if (s4.isClicked()) s4.click();
    if (s5.isClicked()) s5.click();
}
