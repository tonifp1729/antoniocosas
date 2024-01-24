document.querySelector(".test").addEventListener("click", function(event){
    event.stopPropagation() //evitamos la propagación del evento en ventana
    alert("Click en el botón.")
})

document.addEventListener("contextmenu", function (event) {
    event.preventDefault()
    alert("El menú contextual ha sido intervenido.")
})

window.addEventListener("click", function (event) {
    console.log("Se ha hecho click sobre la ventana de la web.")
})