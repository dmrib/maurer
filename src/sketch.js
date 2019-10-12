/*
* CONSTANTS AND DEFINITIONS
*/
let N;
let D;
let R;
let I;


/*
* p5.js setup function.
*/
function setup()
{
  // set rose creation parameters
  N = int(random(2, 10));
  D = int(random(20, 100));
  R = 200;
  I = 0;

  // create canvas
  createCanvas(500, 500);

  // set angle mode
  angleMode(DEGREES);

  // set frame rate
  frameRate(10);
}


/*
* p5.js drawing callback.
*/
function draw()
{
  // clear background
  background(11, 41, 79);

  // translate to center
  translate(width / 2, height / 2);

  // set stroke color
  strokeWeight(3);
  stroke(223, 112, 163);

  // draw rose contour
  noFill();
  beginShape();
  for(let i = 0; i < 361; i++)
  {
    let k = i;
    let r = sin(N * k);
    let x = R * (r * cos(k));
    let y = R * (r * sin(k));
    vertex(x, y);
  }
  endShape();

  // set stroke color
  strokeWeight(1);
  stroke(161, 230, 192);

  // draw rose pattern
  noFill();
  beginShape();
  for(let j = 0; j < I; j++)
  {
    let k = j * D;
    let r = sin(N * k);
    let x = R * (r * cos(k));
    let y = R * (r * sin(k));
    vertex(x, y);
  }
  endShape();

  // increase current step
  I+=1;

}
