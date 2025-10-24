let item = document.getElementById ("input")
let lugar = document.getElementById("lista")
function adicionar (){
    lugar.innerHTML += `<input type="checkbox"">${item.value} <br>`
    item.value = ""
}


input.addEventListener("keydown", function(event) {
    if (event.key === "Enter") { // só dispara se for a tecla Enter
        adicionar();
    }
});