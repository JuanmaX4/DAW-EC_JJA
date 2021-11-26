const buscarPoki = document.getElementById("buscarPoki");
const boton = document.getElementById("boton");

function reqListener() {
    var obj = JSON.parse(this.responseText);
    console.log(obj.sprites);
    console.log(obj.name);
    console.log(obj.height);
    console.log(obj.weight);
    console.log(obj.types);
    console.log(obj.versions);
    
    /* Refresca la tabla eliminando la busqueda anterior una vez que introduces otro nuevo pokemon */

    instanciadorTabla.innerHTML=``;
    versionTabla.innerHTML=``;


    /* For q recorre las listas de la pokeAPI */

    for (var i = 0; i < 1; i++) {
        instanciadorTabla.innerHTML+=`
        <tr>
          <th><img src=${obj.sprites.front_default}></th>
          <th>${obj.name}</th>
          <th>${obj.height}</th>
          <th>${obj.weight}</th>
          <th>${obj.types[0].type.name}</th>`
          for (let j = 0; j < obj.game_indices.length; j++) {
            versionTabla.innerHTML+=
            `<th>${obj.game_indices[j].version.name}</th>`
          }
        `</tr>`; 
    }
}

var instanciadorTabla = document.getElementById("tabla");
var versionTabla = document.getElementById("tabla2");


const llamarApi = () => {
    let nombre = buscarPoki.value.toString().toLowerCase();
    var oReq = new XMLHttpRequest();
    oReq.addEventListener("load", reqListener);
    oReq.open("GET", `https://pokeapi.co/api/v2/pokemon/${nombre}`, true);
    oReq.send();
};

boton.addEventListener('click', llamarApi); 
