let nombre = "Cecilia"
let apellido = "Bascher"
let nombre_completo = nombre + " " + apellido
let numeros = [10,7,5,2,14,"Cecilia",true]
numeros.push("Hola")
numeros.push(45)
let persona = {
    nombre : "Cecilia",
    edad : 29,
    vive : true
}
//persona.trabaja = false
//persona.tienePerrito = 0
for (let index = 0; index < numeros.length; index++) {
    const element = numeros[index];
    console.log(numeros[index])
}
for (let prop in persona){
    console.log(persona[prop])
}
console.clear()

/* let dos = document.getElementById("item2")
dos.innerText = "Nuevo item"
let items = document.getElementsByClassName("item")
let lista = document.getElementsByTagName("li") */
let dos = document.querySelector("#item2")
let items = document.querySelectorAll(".item")
let lista = document.querySelectorAll("li")
//console.dir(lista)

let p = document.createElement("p")
p.innerText = "Mi nuevo texto"
p.id = "nuevo"
p.className = "parrafo"

console.log(p)
//console.log(persona)

let body = document.querySelector("body")
body.appendChild(p)

/*Ejercicio:*/
let ul = document.querySelector("ul")
let item1 = document.querySelector("#item1")
let li = document.createElement("li")
li.innerText = "Un texto"
ul.insertBefore(li, item1)
console.log(ul)
 //Ejercicio 2:
let nuevaLista = document.createElement("ul")
for (let i = 0; i < 5; i++) {
    //const element = nuevaLista[i];
    let elemLista = document.createElement("li")
    elemLista.innerText = "Nuevo texto " + i
    nuevaLista.appendChild(elemLista)
}
body.appendChild(nuevaLista)
console.log(nuevaLista)