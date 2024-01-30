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
let pantallaInicial = document.getElementById("pantallaInicial")
let pantallaJugador = document.getElementById("pantallaJugador")
let pantallaFinal = document.getElementById("pantallaFinal")

//Inicializamos los distintos elementos que vamos a trabajar en cada vista.
//pantallaInicial
let botonIniciar = document.getElementById("botonIniciar")
let musica = document.querySelector("audio")

//pantallaJugador
let contenedorJugada = document.getElementById("jugadas")
let botonTerminar = document.getElementById("botonTerminar")

//pantallaFinal
let botonVolver = document.getElementById("botonVolver")


//VISTA - pantallaInicial
botonIniciar.addEventListener('click', e => {
  pantallaInicial.style.display = 'none'
  pantallaJugador.style.display = 'flex'
  musica.play()
})


//VISTA - pantallaJugador
botonTerminar.addEventListener('click', e => {
  pantallaJugador.style.display = 'none'
  pantallaFinal.style.display = 'flex'
})

//Hemos capturado el evento click dentro del contenedor
contenedorJugada.addEventListener('click', e => {
  //Si se clica sobre un elemento de tipo botón dentro del contenedor qeu hemos capturado, el div jugada, guardamos el texto.
  if(e.target.tagName === 'button') {
    let jugadaSeleccionada = e.target.innerText;
  }
})

function finJuego() {
  musica.pause();
  musica.currentTime = 0;
}

//VISTA - pantallaFinal
botonVolver.addEventListener('click', e => {
  pantallaFinal.style.display = 'none'
  pantallaInicial.style.display = 'flex'
})