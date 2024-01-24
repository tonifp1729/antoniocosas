//Recogemos todos los elementos (imagenes del div imagenes)
let imagenes = document.querySelectorAll("#imagenes img")

//Añadimos los manejadores de eventos para cada elemento recogido.
imagenes.forEach(imagen => {
    imagen.addEventListener("click", evento => {
        let imagenPrincipal = document.querySelector("#imagenPrincipal img")

        imagenPrincipal.setAttribute("src",evento.target.getAttribute("src"))
    })
})

//Recogemos los elementos (bloques de colores)
let bloquesColores = document.querySelectorAll("#colores div")

//Añadimos los manejadores de evento para cada elemento que hemos recogido
bloquesColores.forEach(bloque => {
    bloque.addEventListener("click", evento => {
        let color = window.getComputedStyle(evento.target).backgroundColor

        //El elemento (imagenPrincipal, que es un div) recibe el color recogido anteriormente
        document.getElementById("imagenPrincipal").style.borderColor = color
    })
});

/* 
    Añadimos los manejadores de evento a los iconos de zoom.
    Primero al zoom-in, después al zoom-out
*/
document.querySelector("#zoom img:nth-child(1)").addEventListener("click", evento => {
    let imagen = document.querySelector("#imagenPrincipal img")
    let dimensionImagen = imagen.offsetWidth
    imagen.style.width=(dimensionImagen+50)+"px"
    imagen.style.height=(dimensionImagen+50)+"px"
})

document.querySelector("#zoom img:nth-child(2)").addEventListener("click", evento => {
    let imagen = document.querySelector("#imagenPrincipal img")
    let dimensionImagen = imagen.offsetWidth
    imagen.style.width=(dimensionImagen-50)+"px"
    imagen.style.height=(dimensionImagen-50)+"px"
})