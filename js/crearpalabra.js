
function guardarYempezar() {
    window.location.href = "lineas.html";
}

let palabraSecreta = [];

function validarLetras(inputLetras) {
    let letrasMayusculas = "ABCDEFGHIJKLMNÑOPQRST";
    let mensajeError = "";
    for (let letras of mensajeError) {
        if (!letrasMayusculas.includes(letras)) {
            mensajeError = "sólo letras mayúsculas"
        }
    }
    if (mensajeError.length === 0) {
        return true;
    } alert(mensajeError);
    return false;
}

validarLetras();