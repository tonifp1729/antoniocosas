/**
  * REGLAS DE JUEGO - Duels OF Fates
  * 
  * Shii-Cho. Pierde en cualquiera de los encuentros, incluido contra sí mismo.
  * Makashi. Vence a soresu, niman. 
  * Soresu. Vence contra ataru, niman.
  * Ataru. Vence a makasi, niman.
  * Shien/Djem So. Vence contra ataru, soresu.
  * Niman. Vence a sien, pierde los demás.
  * Juyo/Vaapad. Pierde contra ataru, gana todos los demás.
  **/


//Inicializamos las vistas, elementos con los que vamos a trabajar:
const pantallaInicial = document.getElementById("pantallaInicial")
const pantallaJugador = document.getElementById("pantallaJugador")
const pantallaFinal = document.getElementById("pantallaFinal")

//Inicializamos los distintos elementos que vamos a trabajar en cada vista.
//pantallaInicial
const botonIniciar = document.getElementById("botonIniciar")
const musica = document.querySelector("audio")

//pantallaJugador
let marcador = document.getElementById("marcador")
let jugadaSeleccionada
const contenedorJugada = document.getElementById("jugadas")
const botonTerminar = document.getElementById("botonTerminar")
let puntosJugador
let puntosRival

//pantallaFinal
const botonVolver = document.getElementById("botonVolver")


//VISTA - pantallaInicial
botonIniciar.addEventListener('click', e => {
  pantallaInicial.style.display = 'none'
  pantallaJugador.style.display = 'flex'
  musica.play()
  puntosJugador = 0
  puntosRival = 0
})


//VISTA - pantallaJugador
botonTerminar.addEventListener('click', e => {
  pantallaJugador.style.display = 'none'
  pantallaFinal.style.display = 'flex'
  musica.pause();
  musica.currentTime = 0;
})

//Hemos capturado el evento click dentro del contenedor
contenedorJugada.addEventListener('click', e => {
  //Si se clica sobre un elemento de tipo botón dentro del contenedor que hemos capturado, el div jugada, guardamos el texto.
  if(e.target.tagName === 'button') {
    jugadaSeleccionada = e.target.id;
  }

  hacerJugada(jugadaSeleccionada)
})

function aleatorio() {
  const min = 1
  const max = 7
  let numero = Math.floor(Math.random() * (max - min + 1) + min);
  return numero;
}

function jugadaRival() {
  let numero = aleatorio()

  switch (numero) {
    case 1:
      return "forma1"
    case 2:
      return "forma2"
    case 3:
      return "forma3"
    case 4:
      return "forma4"
    case 5:
      return "forma5"
    case 6:
      return "forma6"
    case 7:
      return "forma7"
  }
}

function hacerJugada(jugadaSeleccionada) {
  let rival = jugadaRival()
  let resultado

  switch (jugadaSeleccionada) {
    case "forma1": //HECHO
      if(rival==="forma1") {
        resultado=0
      }else {
        resultado=1
      }
      break
    case "forma2": //HECHO
      if(rival==="forma3" || rival==="forma6" || rival==="forma1") {
        resultado=2
      }else if(rival==="forma4" || rival==="forma7") {
        resultado=1
      }else {
        resultado=0
      }
      break
    case "forma3": 
      if(rival==="forma4" || rival==="forma6" || rival==="forma1") {
        resultado=2
      }else if(rival==="forma2" || rival==="forma7") {
        resultado=1
      }else {
        resultado=0
      }
      break
    case "forma4": 
      if(rival==="forma2" || rival==="forma6" || rival==="forma7" || rival==="forma1") {
        resultado=2
      }else if(rival==="forma3" || rival==="forma5") {
        resultado=1
      }else {
        resultado=0
      }
      break
    case "forma5": 
      if(rival==="forma3" || rival==="forma4" || rival==="forma1") {
        resultado=2
      }else if(rival==="forma2" || rival==="forma7") {
        resultado=1
      }else {
        resultado=0
      }
      break
    case "forma6": 
      if(rival==="forma5" || rival==="forma1") {
        resultado=2
      }else if(rival==="forma2" || rival==="forma3" || rival==="forma4" || rival==="forma7") {
        resultado=1
      }else {
        resultado=0
      }
      break
    case "forma7": 
      if(rival==="forma4") {
        resultado=1
      }else if(rival==="forma7") {
        resultado=0
      }else {
        resultado=2
      }
      break
  }

  if(resultado===0) {
    //Empate = +1 a ambos
    puntosJugador++
    puntosRival++
  }else if(resultado===1) {
    //Derrota = +1 a rival
    puntosRival++
  }else if(resultado===2) {
    //Victoria = +1 a jugador
    puntosJugador++
  }

  marcador.textContent = puntosJugador + " - " + puntosRival

  terminarJuego(puntosJugador,puntosRival)
}

function terminarJuego(puntosJugador, puntosRival) {
  let final=0
  
  if (puntosJugador===10) {
    final=1
  }else if(puntosRival===10) {
    final=2
  }else if(puntosJugador===10 && puntosRival===10) {
    final=3
  }

  if (final!==0) {
    pantallaJugador.style.display = 'none'
    pantallaFinal.style.display = 'flex'
    musica.pause();
    musica.currentTime = 0;
  }
}

//VISTA - pantallaFinal
botonVolver.addEventListener('click', e => {
  pantallaFinal.style.display = 'none'
  pantallaInicial.style.display = 'flex'
})