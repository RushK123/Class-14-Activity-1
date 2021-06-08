var ball = {
  x : 300,
  y : 200,
  radius : 30,
  vX : -2,
  vY : -4,
  arr : [89,1000,9]
};



function setup() {
  createCanvas(600, 400);
  console.log(ball.vY);
  console.log(ball.arr)
  
}



function draw() {
  background(200, 10, 200);
  ellipse(ball.x, ball.y, ball.radius);
  ball.x += ball.vX
}


