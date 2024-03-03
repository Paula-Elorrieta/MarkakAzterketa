document.getElementById("A1Emaitza").addEventListener("click", function() {

    let kopuru = document.getElementById("A1kopuru").value;
    let radioBTN = document.getElementsByName("frutak");
    let balioa = 0;
    

    for (let i = 0; i < radioBTN.length; i++) {
        if (radioBTN[i].checked) {
            balioa = radioBTN[i].value;
            console.log(balioa);
        }
    }

    if (balioa == 0) {
        alert("Aukeratu behar duzu bat")
    }else {
        if (kopuru == "") {
            alert("Aukeratu kopurua");
        }else {
            let prezioa = balioa * kopuru;
            alert("Zure prezioa da: " + prezioa.toFixed(2));
        }
    }

});