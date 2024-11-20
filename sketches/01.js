let width = 400;
let height = 300;

function setup() {
    createCanvas(width, height);
}

function draw() {
    background(220, 0, 220);

    // CENTER = "center";
    rectMode(CENTER);

    rect(200, 150, 150, 150);

    line(0, 0, 400, 400);
}