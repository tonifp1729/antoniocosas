function getCopyright(name, year) {
    let copyright = name + " - " + year
    return copyright
}

let copyright = getCopyright("OpenWebinars", 2024)

console.log(copyright)

//Funciones anónimas
let formatter = function(name, year) {
    return name + " | " + year
}

let result = function(name, year, formatter) {
    let copyright = formatter(name, year)
    return copyright
}

console.log(result("Antonio", 2024, formatter))

//Funciones auto-invocadas
(function(name, year) {
    console.log(name, year)
})("Antonio", 1999);

//Funciones callback
function ataque(lesion, arma, callback) {
    
}
