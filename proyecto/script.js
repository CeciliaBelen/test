/* let btn = document.querySelector("button")
btn.addEventListener("click", hacerClick)
function hacerClick(){
    console.log("Click!")
} */


let body = document.querySelector("body")
let btn = document.querySelector("button")
let click = 1
function hacerClick() {
    let btnNuevo = document.createElement("button")
    btnNuevo.innerText = "Click " + click++
    body.appendChild(btnNuevo)
    btnNuevo.addEventListener("click", funcionParaLosBotones)
    console.log("Clicks")
}
btn.addEventListener("click", hacerClick)
function funcionParaLosBotones(){
    console.log("Q de clicks: ")
}