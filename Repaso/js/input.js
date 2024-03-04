// https://norfipc.com/inf/javascript-como-escribir-texto-elementos-paginas-web.html

// https://developer.mozilla.org/es/docs/Learn/JavaScript/Building_blocks/Events

// https://desarrolloweb.com/articulos/1236.php

document.getElementById("submitBTN").addEventListener("click", function() {

    let kutxa = document.getElementById("idatziKutxa");

    if (kutxa.style.visibility == "hidden") {
        kutxa.style.visibility = "visible";
        kutxa.innerHTML = "Wa";
    }else {
        kutxa.style.visibility = "hidden";
    }

});