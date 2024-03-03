// 

let eroszbk = 1;
let BEZA = 0.21;
let deskontua = 0;
let zenbatekoa = 0;
let guztira = 0;


document.getElementById("gorde").addEventListener("click", function() {
    let taula = document.getElementById("taula1");

    let selecta = document.getElementById("produktua");
    let produktuaIzena = selecta.options[selecta.selectedIndex].text;

    let produktuaValue = selecta.value;
    let kopurua = document.getElementById("kopurua").value;

    zenbatekoa = produktuaValue * kopurua;
    guztira = guztira + zenbatekoa;

    if (kopurua != 0) {
        taula.style.visibility = "visible";

        if (taula.tBodies[0]) {
        } else {
            taula.createTBody();
        }

        let lerroa = taula.insertRow();

        let gelaxka = lerroa.insertCell();
        gelaxka.innerHTML = eroszbk;

        gelaxka = lerroa.insertCell();
        gelaxka.innerHTML = produktuaIzena;

        gelaxka = lerroa.insertCell();
        gelaxka.innerHTML = produktuaValue;

        gelaxka = lerroa.insertCell();
        gelaxka.innerHTML = kopurua;

        gelaxka = lerroa.insertCell();
        gelaxka.innerHTML = zenbatekoa.toFixed(2);

        eroszbk++

        

    }else {
        alert("Sartu kopurua");
    }

});

function fakturaSORTU(zenbatekoa, guztira, BEZA) {
    let taula = document.getElementById("taula2");
    deskontua = BEZA * zenbatekoa;

    let PREZIOA = guztira - deskontua;
    
    taula.style.visibility = "visible";

    if (taula.tBodies[0]) {
    } else {
        taula.createTBody();
    }

    let lerroa;

    if (taula.tBodies[0].rows.length > 0) {
      lerroa = taula.tBodies[0].rows[0];
    } else {
      lerroa = taula.tBodies[0].insertRow();
      lerroa.insertCell();
      lerroa.insertCell();
    }
  
    lerroa.cells[0].innerHTML = deskontua.toFixed(2);
    lerroa.cells[1].innerHTML = PREZIOA.toFixed(2);
}