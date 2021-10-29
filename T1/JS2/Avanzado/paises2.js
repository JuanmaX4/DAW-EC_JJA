function CreateTableFromJSON() {
    var paises = [
    {
        "nombre":"Albania",
        "capital":"Tirana"
    },
    {
        "nombre":"Alemania",
        "capital":"Berlín"
    },
    {
        "nombre":"Andorra",
        "capital":"Andorra la Vella"
    },
    {
        "nombre":"España",
        "capital":"Madrid"
    },
    {
        "nombre":"Francia",
        "capital":"París"
    },
    {
        "nombre":"Reino Unido",
        "capital":"Londres"
    },
    {
        "nombre":"Bélgica",
        "capital":"Bruselas"
    },
    {
        "nombre":"Croacia",
        "capital":"Zagreb"
    },
    {
        "nombre":"Dinamarca",
        "capital":"Copenhage"
    },
    {
        "nombre":"Eslovaquia",
        "capital":"Bratislava"
    },
    {
        "nombre":"Estonia",
        "capital":"Tallin"
    },
    {
        "nombre":"Finlandia",
        "capital":"Helsinks"
    },
    {
        "nombre":"Italia",
        "capital":"Roma"
    },
    {
        "nombre":"Luxemburgo",
        "capital":"Luxemburgo"
    },
    {
        "nombre":"Mónaco",
        "capital":"Mónaco"
    },
    {
        "nombre":"Paises Bajos",
        "capital":"Amsterdan"
    },
    {
        "nombre":"Polonia",
        "capital":"Varsovia"
    },
    {
        "nombre":"Portugal",
        "capital":"Lisboa"
    },
    {
        "nombre":"Rusia",
        "capital":"Moscú"
    },
    {
        "nombre":"República Checa",
        "capital":"Praga"
    },
]
    var instanciadorTabla = document.getElementById("tabla");

    // For donde van todo el json
    var col = [];
    for (var i = 0; i < paises.length; i++) {
        for (var key in paises[i]) {
            if (col.indexOf(key) === -1) {
                col.push(key);
            }
        }
    }

    // CREATE DYNAMIC TABLE.
    var table = document.createElement("table");

    // Aqui crea las columnas del json

    var tr = table.insertRow(-1);                   // TABLE columnas

    for (var i = 0; i < col.length; i++) {
        var th = document.createElement("th");      // Tabla cabecera
        th.innerHTML = col[i];
        tr.appendChild(th);
    }

    // ADD JSON DATA TO THE TABLE AS ROWS.
    for (var i = 0; i < paises.length; i++) {

        tr = table.insertRow(-1);

        for (var j = 0; j < col.length; j++) {
            var tabCell = tr.insertCell(-1);
            tabCell.innerHTML = paises[i][col[j]];
        }
    }

    // FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
    var divContainer = document.getElementById("showData");
    divContainer.innerHTML = "";
    divContainer.appendChild(table);
}