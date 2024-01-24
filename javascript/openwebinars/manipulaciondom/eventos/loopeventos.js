//Funcionamiento del call stack
function funcionA() {
    console.log("Estoy en A.")
    funcionB()
}

function funcionB() {
    console.log("Estoy en B.")
    funcionC()
}

function funcionC() {
    console.log("Estoy en C.")
}

funcionA()

//Temporizador que se añadirá a la fila de callback (CallBack Queue)
setTimeout(function () {
    console.log("Se ha acabado el temporizador.")
},1000)

//Capturador de click
boton = document.querySelector("button").addEventListener("click", function(event) {
    console.log("Se ha pulsado el botón.")
})