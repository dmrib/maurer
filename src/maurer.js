/*
* Maurer rose shape abstraction.
*/
class Maurer
{

  /*
  * Constructor.
  *
  * Args:
  *  x(number): rose center x coordinate
  *  y(number): rose center y coordinate
  *  N(number): maurer N parameter
  *  D(number): maurer D parameter
  *
  * Returns:
  *  undefined.
  */
  constructor(x, y, N, D)
  {
    // set rose parameters
    this.center = createVector(x, y);
    this.N = N;
    this.D = D;
    this.R = 25;

    // set rose colors
    this.countorColor = this.makeColor();
    this.roseColor = this.makeColor();
  }

  /*
   * I generate a random color.
   *
   * Returns:
   *  _ (Array): generated color
   */
  makeColor()
  {
    return [int(random(0, 255)), int(random(0, 255)), int(random(0, 255))];
  }

  /*
  * I draw this rose's coutour.
  *
  * Returns:
  *  undefined.
  */
  drawCountour()
  {
    // set stroke color
    strokeWeight(3);
    stroke(...this.countorColor);

    // don't fill shape
    noFill();

    // draw shape
    beginShape();
    for(let i = 0; i < 361; i++)
    {
      let r = sin(this.N * i);
      let x = this.R * (r * cos(i));
      let y = this.R * (r * sin(i));
      vertex(x, y);
    }
    endShape();
  }

  /*
  * I draw this Maurer rose pattern.
  *
  * Returns:
  *  undefined.
  */
  drawRose()
  {
    // set stroke color
    strokeWeight(3);
    stroke(...this.roseColor);

    // don't fill shape
    noFill();

    // draw pattern
    beginShape();
    for(let j = 0; j < 361; j++)
    {
      let k = j * this.D;
      let r = sin(this.N * k);
      let x = this.R * (r * cos(k));
      let y = this.R * (r * sin(k));
      vertex(x, y);
    }
    endShape();
  }

  /*
  * I draw this Maurer rose.
  *
  * Returns:
  *  undefined.
  */
  draw(step)
  {
    // push transformation matrix
    push();

    // translate to rose center
    translate(this.center.x, this.center.y);

    // rotate it
    rotate(step);

    // draw rose pattern
    this.drawRose();

    // draw contour
    this.drawCountour();

    // pop transformation matrix
    pop();
  }
}
