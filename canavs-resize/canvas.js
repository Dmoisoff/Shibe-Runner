let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let c = canvas.getContext('2d');
// fillRect(x ,y width, height)
c.fillRect(100, 100, 100, 100);
c.fillRect(300, 300, 100, 100);
c.fillRect(300, 100, 100, 100);
c.fillRect(100, 300, 100, 100);
c.fillRect(200, 200, 100, 100);
c.fillRect(200, 400, 100, 100);
