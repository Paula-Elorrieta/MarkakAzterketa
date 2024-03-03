// https://desarrolloweb.com/articulos/1281.php

var herrialde_1 = new Array(
    "-",
    "Amurrio",
    "Añana",
    "Aramaio",
    "Artzeniega",
    "Arraia-Maeztu",
    "..."
  );
  
  var herrialde_2 = new Array(
    "-",
    "Abadiño",
    "Abanto-Zierbena	",
    "Ajangiz",
    "Alonsotegi	",
    "Amoroto",
    "Arakaldo",
    "..."
  );
  
  var herrialde_3 = new Array(
    "-",
    "Abaltzisketa",
    "Aduna",
    "Aizarnazabal",
    "Albiztur",
    "..."
  );
  
  var herrialde_4 = new Array(
    "-",
    "Ahetze",
    "Ainhoa",
    "Angelu",
    "Arbona",
    "Arrangoitze",
    "..."
  );

  var herrialdeak = [
    [],
    herrialde_4,
    herrialde_3,
    herrialde_2,
    herrialde_1
  ];

  function herriAldaketa() {

    let herriID = document.getElementById("herrialde").value;

    if (herriID != 0) {
        let herriak = herrialdeak[herriID];

        let selectHerri = document.getElementById("herri");
        selectHerri.innerHTML = "";

        for (let i = 0; i < herriak.length; i++) {

            let option = document.createElement("option");
            let testua = document.createTextNode(herriak[i]);

            option.appendChild(testua);
            selectHerri.appendChild(option);

        }

    }

  }