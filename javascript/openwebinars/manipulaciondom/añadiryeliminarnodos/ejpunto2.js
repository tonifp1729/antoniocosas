
//Introducimos todos los manejadores de eventos

document.getElementById("appendNode").addEventListener( 'click', evento => {
    //Creamos el nodo que vamos a añadir
    let elemento = document.createElement("li")
    let texto = document.createTextNode("SECCIÓN D") //Creamos el contenido del elemento li, que es un texto
    elemento.append(texto) //Añadimos el texto al nodo recien creado

    //Añadimos al final de la lista el nuevo nodo
    document.querySelector("ul").append(elemento)
})

document.getElementById("appendString").addEventListener('click', evento => {
    //Añadimos el texto al nodo
    document.querySelector("ul").append("Esto es texto añadido al final de la lista con appendString")
})

document.getElementById("prependNode").addEventListener('click', evento => {
    //Creamos el elemento, creamos el nodo de texto y le introducimos el nodo al nuevo elemento creado.
    let element = document.createElement("li")
    let texto = document.createTextNode("SECCIÓN -A")
    element.append(texto)

    //Lo añado al comienzo de la lista
    document.querySelector("ul").prepend(element)
})

document.getElementById("beforeNode").addEventListener('click', evento => {
    //Creamos el elemento, creamos el nodo de texto y le introducimos el nodo al nuevo elemento creado.
    let elemento = document.createElement("p")
    let texto = document.createTextNode("Este es un párrafo que introduciremos antes de la lista")
    elemento.append(texto)

    //Seleccionamos el elemento y le añadimos el nuevo nodo delante (antes de)
    document.querySelector("ul").before(elemento)
})

document.getElementById("beforeString").addEventListener('click', evento => {
    //Añadimos el nodo de texto justo delante
    document.querySelector("ul").before("Solo soy un pobrecito nodo de texto, me han incluido justo delante de la lista.")
})

document.getElementById("afterNode").addEventListener('click', evento => {
    //Creamos el elemento (etiqueta), creamos el nodo de texto y lo introducimos sobre el nuevo elemento que hemos creado
    let elemento = document.createElement("p")
    let texto = document.createTextNode("Este párrafo se ha añadido después de la tabla con after.")
    elemento.append(texto)

    //Seleccionamos la tabla y añadimos detrás (after)
    document.querySelector("table").after(elemento)
})

document.getElementById("afterString").addEventListener('click', evento => {
    //Añadimos el nodo de texto justo delante
    document.querySelector("table").before("Solo soy un pobrecito nodo de texto, me han incluido justo detrás de la tabla utilizando after.")
})

document.getElementById("cloneNode").addEventListener('click', evento => {
    //Clono la última fila de la tabla (su último elemento hijo) y todos los nodos hijos del mismo (los td pertenecientes al último tr)
    let element = document.querySelector("table").lastElementChild.cloneNode("true")

    //Añadimos los nodos clonados al principio de la tabla
    document.querySelector("table").prepend(element)
})

document.getElementById("replaceWith").addEventListener('click', evento => {
    //Creamos los elementos
    let fila = document.createElement("tr")
    let celda = document.createElement("th")
    celda.setAttribute("colspan", 4)
    let contenido = document.createTextNode("ESTA FILA HA SIDO REEMPLAZADA")

    //Agrego a cada elemento los nodos necesarios
    celda.append(contenido)
    fila.append(celda)

    //Reemplazamos el primer elemento hijo del elemento seleccionado(tabla)
    document.querySelector("table").firstElementChild.replaceWith(fila)
})

document.getElementById("innerHTML").addEventListener('click', evento => {
    //Añadimos un caption antes del inicio
    document.querySelector("th").insertAdjacentHTML("beforebegin","<caption>TABLA DE MUESTRA</caption>")

    //Añadimos una fila antes del final
    document.querySelector("table").insertAdjacentHTML("beforeend","<th colspan='4'>Hola muy buenas</th>")
})