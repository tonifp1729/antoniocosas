//Obtenemos los elementos
let normal = document.getElementById("normal")
let simular = document.getElementById("simular")
let contenedor = document.getElementsByClassName("contenedor")[0]

//Capturamos el evento
normal.addEventListener("dblclick", e => {
    alert("Doble click sobre el boón con un handler propio")
})

//Creamos ahora el evento sintetico
contenedor.addEventListener("colorChange", e => {
    e.target.style.backgroundolor = "red"
})

//Capturamos el evento sintetico y simulamos el click en el otro
simular.addEventListener("click", function (e) {
    //creamos el objeto evento que necesitamos
    let dobleClick = new MouseEvent("dblclick")
    
    //Simulo la ejecucion del evento en el otro boton
    normal.dispatchEvent(dobleClick)

    //Lanzo el evento sintético
    let eventoPropio = new Event("colorChange")
    contenedor.dispatchEvent(eventoPropio)
})