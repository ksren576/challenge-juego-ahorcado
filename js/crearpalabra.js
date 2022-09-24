const palabras = sessionStorage.getItem('palabras') ? JSON.parse(sessionStorage.getItem('palabras')) : ["MANZANA", "CEREZA", "KIWI"];
const input = document.querySelector('.input-text');
const letrasValidas = [...'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ'];

function cancelar() {
    window.location.href = "index.html";
}

function guardarYempezar() {
    const nuevaPalabra = input.value;
    if ([...nuevaPalabra].every((letra) => letrasValidas.includes(letra))) {
        sessionStorage.setItem('palabras', JSON.stringify([...palabras, nuevaPalabra]));
        document.querySelector('.error').style.display = 'none';
        window.location.href = "juego.html";
    } else {
        document.querySelector('.error').style.display = 'block';
    }
}
