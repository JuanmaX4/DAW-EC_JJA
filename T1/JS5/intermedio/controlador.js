//matriz: Number[4][4] = [];
function Calcular_determinante() {
    var inputElement = document.getElementById('a00');
    var inputValue = inputElement.value;
    console.log(inputValue);
}
var boton = document.getElementById("calculo");
boton.addEventListener("click", Calcular_determinante);
/*function mostrar(m){
    
    for (let i = 0; i < m.length; i++) {
        document.write('&nbsp;&nbsp;'+m[i].join(' ')+'<br/>');
    }
}

var a = [
    [a], [a], [a], [a],
    [a], [a], [a], [a],
    [a], [a], [a], [a],
    [a], [a], [a], [a]
];

document.write('Mi matriz a=');
mostrar(a);*/
