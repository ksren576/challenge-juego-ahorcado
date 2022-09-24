const divLetrasCorrectas = document.querySelector('#letrasCorrectas');
const divLetrasIncorrectas = document.querySelector('#letrasIncorrectas');
let palabra = '';
let letrasEncontradas = [];
let letrasIncorrectas = [];
let funcionesParaDibujar = [
    dibujarError1,
    dibujarError2,
    dibujarError3,
    dibujarError4,
    dibujarError5,
    dibujarError6,
    dibujarError7,
    dibujarError8,
];

function desistir() {
    window.location.href = "index.html";
}

function escojerPalabraSecreta() {
    return palabras[Math.floor(Math.random() * palabras.length)];
}

function verificarFinDelJuego() {
    if (letrasIncorrectas.length === 8) {
        document.querySelector('.error').style.display = 'block';
    }
}

function esGanador() {
    return [...palabra].every((letra) => letrasEncontradas.includes(letra));
}

function detectarTeclaPresionada(event) {
    if (letrasIncorrectas.length === 8 || esGanador()) return;
    const letraPresionada = event.key;
    const esLetraValida = [...'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ'].includes(letraPresionada);
    const existeEnPalabra = [...palabra].includes(letraPresionada);
    if (esLetraValida && existeEnPalabra) {
        letrasEncontradas.push(letraPresionada);
        divLetrasCorrectas.innerHTML = [...palabra].map((letra) => {
            if (letrasEncontradas.includes(letra)) {
                return '<div class="letra">' + letra + '</div>';
            }
            return '<div class="letra"></div>';
        }).join('');
        if (esGanador()) {
            document.querySelector('.exito').style.display = 'block';
        }
    }
    if (esLetraValida && !existeEnPalabra) {
        const existeEnLetrasIncorrectas = letrasIncorrectas.includes(letraPresionada);
        if (!existeEnLetrasIncorrectas) {
            letrasIncorrectas.push(letraPresionada);
            funcionesParaDibujar[letrasIncorrectas.length - 1]();
            verificarFinDelJuego();
        }
        divLetrasIncorrectas.innerHTML = letrasIncorrectas.map((letra) => '<div class="letraEquivocada">' + letra + '</div>').join('');
    }
}

function iniciarjuego() {
    clearCanvas();
    document.querySelector('.error').style.display = 'none';
    document.querySelector('.exito').style.display = 'none';
    letrasEncontradas = [];
    letrasIncorrectas = [];
    palabra = escojerPalabraSecreta();
    divLetrasCorrectas.innerHTML = [...palabra].map(() => '<div class="letra"></div>').join('');
    divLetrasIncorrectas.innerHTML = '';
}

document.addEventListener('keydown', detectarTeclaPresionada);
