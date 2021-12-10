//matriz: Number[4][4] = [];

function Calcular_determinante(){
    const inputElement : HTMLInputElement = <HTMLInputElement>document.getElementById('a00')
    const inputValue = inputElement.value;
    console.log(inputValue);
}

let boton = <HTMLElement>document.getElementById("calculo");

boton.addEventListener("click",Calcular_determinante);

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

