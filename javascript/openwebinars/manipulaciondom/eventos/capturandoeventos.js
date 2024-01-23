//handler para mostrar la información
function mostrarContenido(e) {
    console.log(e)
    alert("El elemento se originó en " + e.target.id + " y ahora está en " + this.id)
}

//Obtenemos los divs para el bubbling
let bubblingDivs = document.querySelectorAll("#bubbling div")

//Obtenemos los divs para el capturing
let capturingDivs = document.querySelectorAll("#capturing div")

//Añadimos los manejadores de eventos (listeners) para cada objeto de Bubbling
bubblingDivs.forEach(function(item) {
    item.addEventListener('click', mostrarContenido)
});

// bubblingDivs.array.forEach(item => {
//     item.addEventListener('click', mostrarContenido)
// });  ESTA NO FUNCIONA Y SE SUPONE QUE SON LO MISMO, vamos a utilizar siempre la otra y listo

//Añadimos los manejadores de eventos (listeners) para cada objeto de Capturing
capturingDivs.forEach(function(item) {
    item.addEventListener('click', mostrarContenido, true)
});