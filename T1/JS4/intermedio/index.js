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

    /* For q recorre las listas de la pokeAPI */

    for (var i = 0; i < 1; i++) {
        instanciadorTabla.innerHTML+=`
        <tr>
          <td><img src=${obj.sprites.front_default}></td>
          <td>${obj.name}</td>
          <td>${obj.height}</td>
          <td>${obj.weight}</td>`
          for (let j = 0; j < obj.types.length; j++) {
            instanciadorTabla.innerHTML+=
            `<td>${obj.types[j].type.name}</td>`
          }          
          for (let j = 0; j < obj.game_indices.length; j++) {
            instanciadorTabla.innerHTML+=
            `<td>${obj.game_indices[j].version.name}</td>`
          }
        `</tr>`; 
    }
}

var instanciadorTabla = document.getElementById("tabla");



const llamarApi = () => {
    let nombre = buscarPoki.value.toString().toLowerCase();
    var oReq = new XMLHttpRequest();
    oReq.addEventListener("load", reqListener);
    oReq.open("GET", `https://pokeapi.co/api/v2/pokemon/${nombre}`, true);
    oReq.send();
};

boton.addEventListener('click', llamarApi); 
