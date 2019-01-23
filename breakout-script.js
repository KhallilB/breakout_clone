const canvas = document.getElementById("myCanvas");
const myCanvas = canvas.getContext("2d");

//GAme Box
myCanvas.beginPath();
myCanvas.rect(20, 40, 50, 50);
myCanvas.fillStyle = "#FF0000";
myCanvas.fill();
myCanvas.closePath();

myCanvas.beginPath();
myCanvas.arc(240, 160, 20, 0, Math.PI * 2, false);
myCanvas.fillStyle = "blue";
myCanvas.fill();
myCanvas.closePath();

myCanvas.beginPath();
myCanvas.rect(160, 10, 100, 40);
myCanvas.strokeStyle = "rgba(0, 0, 255, 0.5)";
myCanvas.stroke();
myCanvas.closePath();

const x = canvas.width / 2;
const y = canvas.height - 30;

function draw() {
  myCanvas.beginPath();
  myCanvas.arc(50, 50, 10, 0, Math.PI * 2);
  myCanvas.fillStyle = "#0095DD";
  myCanvas.fill();
  myCanvas.closePath();
}
setInterval(draw, 10);
