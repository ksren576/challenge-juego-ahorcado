
let pincel = document.getElementById("canvas1").getContext("2d");

function dibujarCirculo(x, y, radio, color) {
    pincel.fillStyle = color;
    pincel.beginPath();
    pincel.arc(x, y, radio, 0, 2 * 3.14);
    pincel.fill();
}
function dibujarError3() {
    dibujarCirculo(60 + 100, 10 + 40, 10, "#0A3871");
}

function dibujarBase(x, y) {
    pincel.beginPath();
    pincel.strokeStyle = "#0A3871";
    pincel.moveTo(70, 120);
    pincel.lineWidth = 2;
    pincel.lineTo(190, 120);
    pincel.stroke();
}
function dibujarError1(x, y) {
    pincel.beginPath();
    pincel.strokeStyle = "#0A3871";
    pincel.moveTo(108, 120);
    pincel.lineWidth = 2;
    pincel.lineTo(108, 50);
    pincel.stroke();
}

function dibujarError2(x, y) {
    pincel.beginPath();
    pincel.strokeStyle = "#0A3871";
    pincel.moveTo(150, 50);
    pincel.lineWidth = 2;
    pincel.lineTo(109, 50);
    pincel.stroke();
}
function dibujarError4(x, y) {
    pincel.beginPath();
    pincel.strokeStyle = "#0A3871";
    pincel.moveTo(160, 60);
    pincel.lineWidth = 2;
    pincel.lineTo(160, 90);
    pincel.stroke();
}
function dibujarError5(x, y) {
    pincel.beginPath();
    pincel.strokeStyle = "#0A3871";
    pincel.moveTo(160, 60);
    pincel.lineWidth = 2;
    pincel.lineTo(125, 80);
    pincel.stroke();
}
function dibujarError6(x, y) {
    pincel.beginPath();
    pincel.strokeStyle = "#0A3871";
    pincel.moveTo(160, 61);
    pincel.lineWidth = 2;
    pincel.lineTo(198, 80);
    pincel.stroke();
}
function dibujarError7(x, y) {
    pincel.beginPath();
    pincel.strokeStyle = "#0A3871";
    pincel.moveTo(160, 90);
    pincel.lineWidth = 2;
    pincel.lineTo(130, 110);
    pincel.stroke();
}
function dibujarError8(x, y) {
    pincel.beginPath();
    pincel.strokeStyle = "#0A3871";
    pincel.moveTo(160, 90);
    pincel.lineWidth = 2;
    pincel.lineTo(190, 110);
    pincel.stroke();
}

function clearCanvas() {
    pincel.clearRect(0, 0, pincel.canvas.width, pincel.canvas.height);
    pincel.beginPath();
    dibujarBase();
}
