

const inputLetras = document.querySelector(".inputLetras")
const nuevojuego = document.querySelector(".nuevoJuego")
const contenedorLetras = document.querySelector(".contenedorLetras")

function nuevoJuego() {
    window.location.href = "index.html";
}


let pincel = document.getElementById("canvasdibujar").getContext("2d");
pincel.fillStyle = "#e5e5e5";
pincel.fillRect(0, 0, 1200, 600);


function dibujarcanvas() {
    pincel.lineWidth = 8;
    pincel.lineCap = "round";
    pincel.lineJoin = "round";
    pincel.fillStyle = "#f3f5f6";
    pincel.strokeStyle = "#8a3871";

    pincel.fillRect(0, 0, 1200, 600);
    pincel.beginPath();
    pincel.moveTo(650, 500);
    pincel.lineTo(900, 500);
    pincel.stroke();
    pincel.closePath();
}

function dibujarLineas() {
    pincel.lineWidth = 6;
    pincel.lineCap = "round";
    pincel.lineJoin = "round";
    pincel.fillStyle = "#f3f5f6";
    pincel.strokeStyle = "#8a3871";
}

//let anchura = 600 / palabraSecreta.lenght;
//for (let i = 0; i < palabrasecreta.lenght; i++) {
//tablero.moveTo(500 + (anchura * i), 640)
//tablero.lineTo(500 + (anchura * i), 640)

//}

function dibujarCirculo(x, y, radio, color) {
    pincel.fillStyle = color;
    pincel.beginPath();
    pincel.arc(x, y, radio, 0, 2 * 3.14);
    pincel.fill();
}
function dibujarCabeza(x, y) {
    dibujarCirculo(x + 100, y + 40, 10, "blue");
}

function dibujarBase(x, y) {
    pincel.beginPath();
    pincel.strokeStyle = "green";
    pincel.moveTo(70, 120);
    pincel.lineWidth = 4;
    pincel.lineTo(190, 120);
    pincel.stroke();
}
function dibujarAhorcado(x, y) {
    pincel.beginPath();
    pincel.strokeStyle = "blue";
    pincel.moveTo(108, 120);
    pincel.lineWidth = 2;
    pincel.lineTo(108, 50);
    pincel.stroke();
}

function dibujarAhorcado1(x, y) {
    pincel.beginPath();
    pincel.strokeStyle = "red";
    pincel.moveTo(150, 50);
    pincel.lineWidth = 2;
    pincel.lineTo(109, 50);
    pincel.stroke();
}
function dibujarAhorcado2(x, y) {
    pincel.beginPath();
    pincel.strokeStyle = "yellow";
    pincel.moveTo(160, 60);
    pincel.lineWidth = 2;
    pincel.lineTo(160, 90);
    pincel.stroke();
}
function dibujarAhorcado3(x, y) {
    pincel.beginPath();
    pincel.strokeStyle = "green";
    pincel.moveTo(160, 60);
    pincel.lineWidth = 2;
    pincel.lineTo(125, 80);
    pincel.stroke();
}
function dibujarAhorcado4(x, y) {
    pincel.beginPath();
    pincel.strokeStyle = "black";
    pincel.moveTo(160, 61);
    pincel.lineWidth = 2;
    pincel.lineTo(198, 80);
    pincel.stroke();
}
function dibujarAhorcado5(x, y) {
    pincel.beginPath();
    pincel.strokeStyle = "red";
    pincel.moveTo(160, 90);
    pincel.lineWidth = 2;
    pincel.lineTo(130, 110);
    pincel.stroke();
}
function dibujarAhorcado6(x, y) {
    pincel.beginPath();
    pincel.strokeStyle = "blue";
    pincel.moveTo(160, 90);
    pincel.lineWidth = 2;
    pincel.lineTo(190, 110);
    pincel.stroke();
}
dibujarBase();
dibujarAhorcado();
dibujarAhorcado1();
dibujarCabeza(60, 10);
dibujarAhorcado2();
dibujarAhorcado3();
dibujarAhorcado4();
dibujarAhorcado5();
dibujarAhorcado6();
dibujarLineas();