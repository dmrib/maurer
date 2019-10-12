/*
* CONSTANTS AND DEFINITIONS
*/
let N;
let D;
let I;

let maurer;

/*
* p5.js setup function.
*/
function setup()
{
  // set rose creation parameters
  N = int(random(2, 10));
  D = int(random(20, 100));
  I = 0;

  // create canvas
  createCanvas(1000, 500);

  // set angle mode
  angleMode(DEGREES);

  // set frame rate
  frameRate(36);

  // create maurer rose
  maurer = new Maurer(width / 2, height / 2, N, D);
}


/*
* p5.js drawing callback.
*/
function draw()
{
  // clear background
  background(250, 254, 232);

  // draw maurer rose
  maurer.draw(I);

  // increase current step
  I++;
}
