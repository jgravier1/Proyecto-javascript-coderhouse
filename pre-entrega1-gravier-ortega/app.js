function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const jugadas = {
    1: "Piedra 🪨",
    2: "Papel 📃",
    3: "Tijera ✂️"
};

const jugadasArray = Object.values(jugadas);

function buscarJugada(jugada) {
    return jugadasArray.indexOf(jugada);
}

function filtrarJugadasGanadoras(jugada) {
    if (jugada === 1) {
        return jugadasArray.filter((j) => j === jugadas[3]);
    } else if (jugada === 2) {
        return jugadasArray.filter((j) => j === jugadas[1]);
    } else if (jugada === 3) {
        return jugadasArray.filter((j) => j === jugadas[2]);
    } else {
        return [];
    }
}

function eleccion(jugada) {
    return jugadas[jugada] || "MAL ELEGIDO";
}

let jugador = 0;
let pc = 0;
let triunfos = 0;
let perdidas = 0;
let partidas = [];

while (triunfos < 3 && perdidas < 3) {
    pc = aleatorio(1, 3);
    jugador = parseInt(prompt("Elige: 1 para piedra, 2 para papel, 3 para tijera"));

    alert("PC elige " + eleccion(pc));
    alert("Tú eliges " + eleccion(jugador));

    let partida = {
        jugador: eleccion(jugador),
        ganadoras: []
    };

    if (pc === jugador) {
        alert("EMPATE");
    } else {
        const jugadasGanadorasJugador = filtrarJugadasGanadoras(jugador);

        if (jugadasGanadorasJugador.includes(eleccion(pc))) {
            alert("GANASTE");
            triunfos++;
        } else {
            alert("PERDISTE");
            perdidas++;
            partida.ganadoras = jugadasGanadorasJugador;
        }
    }

    partidas.push(partida);
}

alert("Ganaste " + triunfos + " veces. Perdiste " + perdidas + " veces.");

if (perdidas > 0) {
    const opcionesGanadoras = partidas
        .filter((partida) => partida.ganadoras.length > 0)
        .map((partida, indice) => ({
            partida: indice + 1,
            opciones: partida.ganadoras.map((opcion) => `${opcion}`)
        }));

    if (opcionesGanadoras.length > 0) {
        const mensaje = opcionesGanadoras
            .map((item) => `Partida ${item.partida}: Debió escoger ${item.opciones.join(" o ")}`)
            .join("\n");
        alert(`En las siguientes partidas debiste escoger una de las opciones ganadoras:\n${mensaje}`);
    } else {
        alert("No hay opciones disponibles para ganar en ninguna partida.");
    }
}
