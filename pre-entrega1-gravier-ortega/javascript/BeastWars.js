let ataqueJugador;
let ataqueEnemigo;
let sectionMensajes;
let vidasJugador = 3;
let vidasEnemigo = 3;

function iniciarJuego() {
    let botonMascotaJugador = document.querySelector(".boton-beast");
    let divSelecionarAtaque = document.querySelector(".selecion-ataque");
    divSelecionarAtaque.style.display = "none"
    let divReiniciar = document.querySelector(".reiniciar")
    divReiniciar.style.display ="none"
    botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador);
    let botonFuego = document.querySelector(".boton-fuego");
    botonFuego.addEventListener("click", ataqueFuego);
    let botonAgua = document.querySelector(".boton-agua");
    botonAgua.addEventListener("click", ataqueAgua);
    let botonTierra = document.querySelector(".boton-tierra");
    botonTierra.addEventListener("click", ataqueTierra);
    let botonReiniciar = document.querySelector("#boton-reiniciar")
    botonReiniciar.addEventListener("click",reinciarJuego )
}

function seleccionarMascotaJugador() {
    let divSelecionarMascota = document.querySelector(".selecion-mascota");
    divSelecionarMascota.style.display = "none"
    let divSelecionarAtaque = document.querySelector(".selecion-ataque");
    divSelecionarAtaque.style.display = "block"
    const inputLeónífero = document.querySelector("#Leónífero");
    const inputSerpienteaqua = document.querySelector("#Serpienteaqua");
    const inputTerratorn = document.querySelector("#Terratorn");
    const spanBeastJugador = document.querySelector("#beast-jugador");

    if (inputLeónífero.checked) {
        spanBeastJugador.innerHTML = "Leónífero";
    } else if (inputSerpienteaqua.checked) {
        spanBeastJugador.innerHTML = "Serpienteaqua";
    } else if (inputTerratorn.checked) {
        spanBeastJugador.innerHTML = "Terratorn";
    } else {
        alert("Selecciona una Beast");
    }
    seleccionarMascotaEnemigo();
}

function seleccionarMascotaEnemigo() {
    const mascotaAleatoria = aleatorio(1, 3);
    const spanBeastEnemigo = document.querySelector("#beast-enemigo");
    if (mascotaAleatoria === 1) {
        spanBeastEnemigo.innerHTML = "Leónífero";
    } else if (mascotaAleatoria === 2) {
        spanBeastEnemigo.innerHTML = "Serpienteaqua";
    } else {
        spanBeastEnemigo.innerHTML = "Terratorn";
    }
}

function ataqueFuego() {
    ataqueJugador = "Fuego";
    ataqueAleatorioEnemigo();
}

function ataqueAgua() {
    ataqueJugador = "Agua";
    ataqueAleatorioEnemigo();
}

function ataqueTierra() {
    ataqueJugador = "Tierra";
    ataqueAleatorioEnemigo();
}

function ataqueAleatorioEnemigo() {
    let ataqueAleatorio = aleatorio(1, 3);
    if (ataqueAleatorio === 1) {
        ataqueEnemigo = "Fuego";
    } else if (ataqueAleatorio === 2) {
        ataqueEnemigo = "Agua";
    } else {
        ataqueEnemigo = "Tierra";
    }
    combate();
}

function combate() {
    let spanVidasJugador = document.querySelector(".vidas-jugador");
    let spanVidasEnemigo = document.querySelector(".vidas-enemigo");
    if (ataqueEnemigo == ataqueJugador) {
        crearMensaje("EMPATE");
    } else if (ataqueJugador == 'Fuego' && ataqueEnemigo == 'Tierra') {
        crearMensaje("GANASTE");
        vidasEnemigo--;
        spanVidasEnemigo.innerHTML = vidasEnemigo;
    } else if (ataqueJugador == 'Agua' && ataqueEnemigo == 'Fuego') {
        crearMensaje("GANASTE");
        vidasEnemigo--;
        spanVidasEnemigo.innerHTML = vidasEnemigo;
    } else if (ataqueJugador == 'Tierra' && ataqueEnemigo == 'Agua') {
        crearMensaje("GANASTE");
        vidasEnemigo--;
        spanVidasEnemigo.innerHTML = vidasEnemigo;
    } else {
        crearMensaje("PERDISTE");
        vidasJugador--;
        spanVidasJugador.innerHTML = vidasJugador;
    }
    revisarVidas()
}
function revisarVidas(){
    if (vidasEnemigo == 0){
        crearMensajeFinal("HAS GANDO LA BATALLA!")
    }else if (vidasJugador == 0){
        crearMensajeFinal("PERDISTE LA BATALLA!")
        
}
}
function crearMensajeFinal(resultadoFinal) {
    sectionMensajes = document.querySelector(".mensajes");
    let parrafo = document.createElement("p");
    parrafo.innerHTML = resultadoFinal ;
    sectionMensajes.appendChild(parrafo);

    let botonFuego = document.querySelector(".boton-fuego");
    botonFuego.disabled = true;
    let botonAgua = document.querySelector(".boton-agua");
    botonAgua.disabled = true;
    let botonTierra = document.querySelector(".boton-tierra");
    botonTierra.disabled = true;
    let divReiniciar = document.querySelector(".reiniciar")
    divReiniciar.style.display ="block"
    
}


function crearMensaje(resultado) {
    sectionMensajes = document.querySelector(".mensajes");
    let parrafo = document.createElement("p");
    parrafo.innerHTML = 'Tu mascota atacó con ' + ataqueJugador + ', la mascota del enemigo atacó con ' + ataqueEnemigo + " " + resultado;
    sectionMensajes.appendChild(parrafo);
}
function reinciarJuego() {
    location.reload()
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

window.addEventListener('load', iniciarJuego);


