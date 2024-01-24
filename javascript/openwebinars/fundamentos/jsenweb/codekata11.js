let inputNombre = document.querySelector(".saluda")
let buttonSaluda = document.querySelector("button")

buttonSaluda.addEventListener("click", function (event) {
    if (inputNombre.value !== "") {
        alert("¡Buenas " + inputNombre.value +"!")
        inputNombre.value = ""
    }
})