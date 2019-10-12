/*
* CONSTANTS AND DEFINITIONS
*/
let step;
let roses;

/*
* Create Maurer roses table.
*/
function createTable()
{
  // initialize table
  let table = [];

  // create roses
  for(let i = 50; i < 1000; i+= 50)
  {
    for(let j = 50; j < 500; j+= 50)
    {
      // randomize rose parameters
      let n = int(random(2, 10));
      let d = int(random(20, 100));

      // create rose
      rose = new Maurer(i, j, n, d);

      // add it to table
      table.push(rose);
    }
  }

  // return it
  return table;
}

/*
* p5.js setup function.
*/
function setup()
{
  // initialize animation step
  step = 0;

  // create canvas
  createCanvas(1000, 500);

  // set angle mode
  angleMode(DEGREES);

  // set frame rate
  frameRate(36);

  // create maurer roses table
  roses = createTable();
}


/*
* p5.js drawing callback.
*/
function draw()
{
  // clear background
  background(250, 254, 232);

  // draw maurer rose
  for(let maurer of roses)
  {
    maurer.draw(step);
  }

  // increase current step
  step++;
}
