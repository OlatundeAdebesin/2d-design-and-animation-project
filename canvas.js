//Get the 2D drawing context from the HTML canvas elements
const canvas = document.getElementById('myCanvas');
const roofCanvas = document.getElementById('roofCanvas');
const houseCanvas = document.getElementById('houseCanvas');
const skyCanvas = document.getElementById('skyCanvas');
const groundCanvas = document.getElementById('groundCanvas');
const houseCtx = houseCanvas.getContext('2d');
const roofCtx = roofCanvas.getContext('2d');
const skyCtx = skyCanvas.getContext('2d');
const groundCtx = groundCanvas.getContext('2d');
const ctx = canvas.getContext('2d');
console.log(ctx);

//Draw a house on houseCanvas using rectangle, triangle and squares
houseCtx.fillStyle = 'skyblue';
houseCtx.fillRect(0, 0, 400, 300); // Draw the house background
houseCtx.fillStyle = 'orange';
houseCtx.fillRect(0, 150, 400, 20); // Draw the color band on the house
houseCtx.fillStyle = 'beige';
houseCtx.fillRect(125, 100, 150, 250); // Draw the house main doors
houseCtx.fillStyle = 'black';
houseCtx.fillRect(125, 100, 150, 2); // Draw the door top
houseCtx.fillRect(195, 100, 5, 250); // Draw the door divider
houseCtx.strokeStyle = 'black';
houseCtx.lineWidth = 2;
houseCtx.strokeRect(125, 100, 150, 2); // Stroke the door top
houseCtx.strokeRect(195, 100, 5, 250); // Stroke the door divider
houseCtx.strokeStyle = 'black';
houseCtx.lineWidth = 2;
houseCtx.strokeRect(125, 100, 150, 250); // Stroke the house main doors
houseCtx.fillStyle = 'brown';
houseCtx.fillRect(195, 180, 20, 60); // Draw the door knob
houseCtx.strokeStyle = 'black';
houseCtx.lineWidth = 2;
houseCtx.strokeRect(195, 180, 20, 60); // Stroke the door knob
houseCtx.fillStyle = 'lightgrey';
houseCtx.fillRect(30, 100, 70, 50); // Draw left upper window
houseCtx.fillRect(300, 100, 70, 50); // Draw right upper window
houseCtx.strokeStyle = 'black';
houseCtx.lineWidth = 2;
houseCtx.strokeRect(30, 100, 70, 50); // Stroke left upper window
houseCtx.strokeRect(300, 100, 70, 50); // Stroke right upper window
houseCtx.fillStyle = 'lightgrey';
houseCtx.fillRect(30, 152, 70, 50); // Draw left middle window
houseCtx.fillRect(300, 152, 70, 50); // Draw right middle window
houseCtx.strokeStyle = 'black';
houseCtx.lineWidth = 2;
houseCtx.strokeRect(30, 152, 70, 50); // Stroke left middle window
houseCtx.strokeRect(300, 152, 70, 50); // Stroke right middle window
houseCtx.fillStyle = 'green';
houseCtx.fillRect(0, 290, 400, 10); // Draw the ground


// Draw the roof
roofCtx.beginPath();
roofCtx.moveTo(0, 100);    
roofCtx.lineTo(300, 10);
roofCtx.lineTo(600, 100);
roofCtx.closePath();
roofCtx.fillStyle = 'brown';
roofCtx.fill();
roofCtx.strokeStyle = 'black';
roofCtx.lineWidth = 5;
roofCtx.stroke();

//Draw and animate a bouncing ball
let ballY = 50;
let ballSpeed = 3;
function animateBall() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.arc(350, ballY, 50, 0, Math.PI * 2);
    ctx.fillStyle = 'gold';
    ctx.fill();
    ballY += ballSpeed;
    if (ballY + 50 > canvas.height || ballY - 50 < 0) ballSpeed = -ballSpeed;
    requestAnimationFrame(animateBall);
}
animateBall();

// Draw the sky background
skyCtx.fillStyle = 'lightblue';
skyCtx.fillRect(0, 0, 1160, 200); // Draw the sky background

// Draw a smiley face to represent the sun
skyCtx.beginPath();
skyCtx.arc(100, 100, 60, 0, Math.PI * 2); // Outer circle
skyCtx.moveTo(135, 100);
skyCtx.arc(100, 97, 35, 0, Math.PI, false); // Mouth (clockwise)
skyCtx.moveTo(85, 80);
skyCtx.arc(80, 80, 5, 0, Math.PI * 2, true); // Left eye
skyCtx.moveTo(125, 80);
skyCtx.arc(120, 80, 5, 0, Math.PI * 2, true); // Right eye
skyCtx.fillStyle = 'yellow';
skyCtx.fill(); // Fill the eyes with yellow color
skyCtx.strokeStyle = 'orange';
skyCtx.lineWidth = 5;
skyCtx.stroke(); // Render the smiley face with stroke

// Draw the ground
groundCtx.beginPath();
groundCtx.moveTo(0, 70);    
groundCtx.lineTo(100, 0);
groundCtx.lineTo(500, 0);
groundCtx.lineTo(600, 70);
groundCtx.fillStyle = 'green';
groundCtx.fill();

// // Draw a cross
// ctx.beginPath();
// ctx.moveTo(50, 50);
// ctx.lineTo(150, 150);
// ctx.moveTo(150, 50);
// ctx.lineTo(50, 150);
// ctx.stroke();

// // Draw text
// ctx.font = '20px Arial';
// ctx.fillStyle = 'white';
// ctx.fillText('Hello Canvas', 50, 30);

// ctx.beginPath(); // Start a new path
// ctx.moveTo(20, 20); // Move the pen to (20, 20)
// ctx.lineTo(150, 100); // Draw a line to (150, 100)
// ctx.stroke(); // Render the path
// ctx.lineTo(20, 100); // Draw a line to (20, 100)
// ctx.closePath(); // Close the path to create a triangle
// ctx.fillStyle = 'green'; // Set the fill color to green
// ctx.fill(); // Fill the triangle with green color
// ctx.strokeStyle = 'black';

// ctx.lineWidth = 2; // Set the line width to 2 pixels
// ctx.stroke(); // Render the path with the stroke color and line width

// Draw a circle
// ctx.beginPath();
// ctx.arc(100, 100, 40, 0, Math.PI * 2); // Draw a circle at (100, 100) with radius 40
// ctx.fillStyle = 'yellow';
// ctx.fill(); // Fill the circle with yellow color
// ctx.strokeStyle = 'orange';
// ctx.lineWidth = 3;
// ctx.stroke(); // Stroke the circle with orange color

// // Draw a smiley face to represent the sun




// ctx.strokeStyle = 'black';
// ctx.lineWidth = 2;
// ctx.stroke(); // Render the smiley face with stroke

// Animation
// let x = 0;
// let speed = 2;
// function animate() {
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     ctx.fillRect(x, 50, 50, 50);
//     x += speed;
//     if (x+50 > canvas.width || x < 0) speed = -speed; // Reverse direction when hitting canvas edges
//     requestAnimationFrame(animate);
// }
// animate();
// setInterval(() => {
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     ctx.fillRect(x, 50, 50, 50);
//     x += -2;
//     if (x > canvas.width) x = 0;
// }, 300); // Move the square every 30 milliseconds

//return back to left when it reaches the end of the canvas
// if (x < 0) x = canvas.width;
// }, 30); // Move the square every 30 milliseconds

// roofCtx.fillRect(50, 50, 300, 100); // Draw the roof
// roofCtx.strokeStyle = 'black';
// roofCtx.lineWidth = 2;
// roofCtx.strokeRect(50, 50, 300, 100); // Stroke the roof 


//Draw and animate a bouncing ball
// let ballY = 50;
// let ballSpeed = 3;
// function animateBall() {
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     ctx.beginPath();
//     ctx.arc(200, ballY, 50, 0, Math.PI * 2);
//     ctx.fillStyle = 'gold';
//     ctx.fill();
//     ballY += ballSpeed;
//     if (ballY + 50 > canvas.height || ballY - 50 < 0) ballSpeed = -ballSpeed;
//     requestAnimationFrame(animateBall);
// }
// animateBall();

//create a function to draw a tree
// function drawTree(x, y) {
//     // Draw trunk
//     ctx.fillStyle = 'saddlebrown';
//     ctx.fillRect(x, y, 20, 60);
//     // Draw foliage
//     ctx.beginPath();
//     ctx.moveTo(x - 30, y);
//     ctx.lineTo(x + 10, y - 60);
//     ctx.lineTo(x + 50, y);
//     ctx.closePath();
//     ctx.fillStyle = 'green';
//     ctx.fill();
// }
// // Draw multiple trees
// drawTree(50, 200);
// drawTree(300, 200);
// drawTree(500, 200);
// // Draw sun
// ctx.beginPath();
// ctx.arc(70, 70, 30, 0, Math.PI * 2);
// ctx.fillStyle = 'yellow';
// ctx.fill();
// ctx.strokeStyle = 'orange';
// ctx.lineWidth = 3;
// ctx.stroke(); // Stroke the sun with orange color

