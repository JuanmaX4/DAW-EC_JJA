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

function CreateTableFromJSON() {
    
    var instanciadorTabla = document.getElementById("tabla");

    //! peligro
    // For donde van todo el json
for (var i = 0; i < paises.length; i++) {
    instanciadorTabla.innerHTML+=`
        <tr>
          <th>${paises[i].nombre}</th>
          <th>${paises[i].capital}</th>
        </tr>`;
    }
}

function filtrar() {
            $(document).ready(function() {
                $("#gfg").on("keyup", function() {
                    var value = $(this).val().toLowerCase();
                    $("#geeks tr").filter(function() {
                        $(this).toggle($(this).text()
                        .toLowerCase().indexOf(value) > -1)
                    });
                });
            });
  }