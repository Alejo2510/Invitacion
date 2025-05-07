document.getElementById('boton-inicio').addEventListener('click', () => {
    document.getElementById('mensaje-inicial').classList.add('oculto');
    document.getElementById('boton-inicio').classList.add('oculto');
    document.getElementById('preguntas').classList.remove('oculto');
    document.getElementById('pregunta1').classList.remove('oculto');
});

function siguientePregunta(numero) {
    document.getElementById(`pregunta${numero}`).classList.add('oculto');
    const siguiente = numero + 1;
    const siguientePregunta = document.getElementById(`pregunta${siguiente}`);
    if (siguientePregunta) {
        siguientePregunta.classList.remove('oculto');
    }
}

function mostrarRespuesta() {
    document.getElementById('preguntas').classList.add('oculto');
    document.getElementById('respuesta-final').classList.remove('oculto');
}
