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

    spritesTabla.innerHTML=``;

    `<table>`
    for (var i = 0; i < 1; i++) {
      spritesTabla.innerHTML+=`
      <tr><td><img src=${obj.sprites.front_default}></td>`      
      
      nameTabla.innerHTML=``;
      
      for (var i = 0; i < 1; i++) {
        nameTabla.innerHTML+=`
        <td>${obj.name}</td>`; 
      }
      
      heightTabla.innerHTML=``;
      for (var i = 0; i < 1; i++) {
        heightTabla.innerHTML+=`
        <td>${obj.height}</td>`; 
      }
      
      weightTabla.innerHTML=``;
      for (var i = 0; i < 1; i++) {
        weightTabla.innerHTML+=`
        <td>${obj.weight}</td>`; 
      }
      typesTabla.innerHTML=``;
        for (let j = 0; j < obj.types.length; j++) {
           typesTabla.innerHTML+=
           `<td>| ${obj.types[j].type.name} |</td>`;
        }

      versionTabla.innerHTML=``;
         for (let j = 0; j < obj.game_indices.length; j++) {
        versionTabla.innerHTML+=
        `<td>| ${obj.game_indices[j].version.name} |</td>
        </tr></table>`
      }
  }
    
      


}


var spritesTabla = document.getElementById("spritesTabla");
var nameTabla = document.getElementById("nameTabla");
var heightTabla = document.getElementById("heightTabla");
var weightTabla = document.getElementById("weightTabla");
var typesTabla = document.getElementById("typesTabla");
var versionTabla = document.getElementById("versionTabla");




const llamarApi = () => {
    let nombre = buscarPoki.value.toString().toLowerCase();
    var oReq = new XMLHttpRequest();
    oReq.addEventListener("load", reqListener);
    oReq.open("GET", `https://pokeapi.co/api/v2/pokemon/${nombre}`, true);
    oReq.send();
};

boton.addEventListener('click', llamarApi); 
