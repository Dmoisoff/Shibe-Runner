let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// c means context
let c = canvas.getContext('2d');

// for (let i = 0; i < 1000; i++) {
//   const color = (`rgba(${Math.random()*255},${Math.random()*255},${Math.random()*255})`);
//   const x = Math.random() * window.innerWidth;
//   const y = Math.random() * window.innerHeight;
//   c.beginPath();
//   c.arc(x, y, 30, 0, Math.PI * 2, false);
//   c.strokeStyle = color;
//   c.stroke();
// }
// fillStyle color, last is alpha, this will effect all the elements follow it
// c.fillStyle = 'rgba(255,255,255,1)';

// fillRectangle(x ,y width, height)
// c.fillRect(100, 100, 100, 100);
// c.fillStyle = 'rgba(255,255,255,.3)';
// c.fillRect(300, 300, 100, 100);
// c.fillStyle = 'rgba(75,75,75,1)';
// c.fillRect(300, 100, 100, 100);
// c.fillRect(100, 300, 100, 100);
// c.fillStyle = 'rgba(125,125,125,1)';
// c.fillRect(200, 200, 100, 100);
// c.fillStyle = 'rgba(0,0,0,1)';
// c.fillRect(200, 400, 100, 100);

//.beginPath seperates line elements that are drawn
// c.beginPath();
// moveTo/lineto(x,y)
// c.moveTo(50,300);
// c.lineTo(300,100);
// c.lineTo(200,350);
// c.lineTo(100,450);
// strokeStyle changes line color
// c.strokeStyle = '#fa34a3';
// c.stroke();

//create circles c.arc(x:Int, y:Int, radians:Int, startAngle: Float(radians), endAngle: Float(radians), drawCounterClockwise: Bool (false));
// c.beginPath();
// c.arc(300, 300, 30, 0, Math.PI * 2, false);
// c.strokeStyle = 'yellow';
// c.stroke();

// create multiple circles
// for (let i = 0; i < 1000; i++) {
//   const color = (`rgba(${Math.random()*255},${Math.random()*255},${Math.random()*255})`);
//   const x = Math.random() * window.innerWidth;
//   const y = Math.random() * window.innerHeight;
//   c.beginPath();
//   c.arc(x, y, 30, 0, Math.PI * 2, false);
//   c.strokeStyle = color;
//   c.stroke();
// }

c.beginPath();
c.arc(300, 300, 30, 0, Math.PI * 2, false);
c.strokeStyle = 'blue';
c.stroke();

// set starting points
// let xPos = 300;
// let yPos = 300;
// random starting points
let xPos = Math.random() * innerWidth;
let yPos = Math.random() * innerHeight;
// dx means x volcity, setting xPos to dx and having the screen refresh creates movement
// dx = positive, moving right
// dy = positive, moving down
// let dx = .2;
// let dy = .2;
// let you randomize if the object is going up or down, what you time it by controls the speed
let dx = (Math.random() - 0.5) * 10;
let dy = (Math.random() - 0.5) * 15;
// let dx = Math.random() - 0.5;
// let dy = Math.random() - 0.5;
const radius = 30;
const animate = () =>{
  requestAnimationFrame(animate);
  // clears the canvas c.clearRect(0, 0, innerWidth, innerHeight);
  c.clearRect(0, 0, innerWidth, innerHeight);
  c.beginPath();
  c.arc(xPos, yPos, radius, 0, Math.PI * 2, false);
  c.strokeStyle = 'blue';
  c.stroke();

  if (xPos + radius > innerWidth || xPos - radius < 0) {
    dx = -dx;
  }

  if (yPos + radius > innerHeight || yPos - radius < 0) {
    dy = -dy;
  }
  xPos += dx;
  yPos += dy;
};

animate();

class Circle{

}
