//ELEMENT va a devolver un HTMLCollection, hay que pasarlo a array para poder manejarlo
let imgA = document.getElementsByClassName("a") // cogemos todas las imagenes que posean la clase 'a'

// Ahora podemos trabajar con este array
// imgA.forEach(img => {
//     img.classList.add("bordesRojos") //hemos utilizado la caracteristica classList de Elements
// });      ESTO NO FUNCIONA, PUES imgA no es un array, sino HTMLCollection

//Usamos form() para convertirlo en un array
imgaArray.from(imgA).forEach( img => {
    img.style.border="3px solid red" //ahora no estoy utilizando una clase del documento CSS, sino la caracteristica de element style
});

let imgA1 = document.querySelector(".a") //estoy cogiendo el primer elemento del HTML que pertenece a esta clase