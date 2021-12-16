
let invest = <HTMLElement>document.getElementById("invest");
let symmetrical = <HTMLElement>document.getElementById("symmetrical");
let nul = <HTMLElement>document.getElementById("null");
let determinant = <HTMLElement>document.getElementById("determinant");
let column3 = <HTMLElement>document.getElementById("column3");
let row = <HTMLElement>document.getElementById("row");
let results = <HTMLElement>document.getElementById("results");


invest.style.display='none';
symmetrical.style.display='none';
nul.style.display='none';
determinant.style.display='none';
column3.style.display='none';
row.style.display='none';

const inputElement : HTMLInputElement = <HTMLInputElement>document.getElementById('a00')

const inputElement1 : HTMLInputElement = <HTMLInputElement>document.getElementById('a01')
const inputElement2 : HTMLInputElement = <HTMLInputElement>document.getElementById('a02')
const inputElement3 : HTMLInputElement = <HTMLInputElement>document.getElementById('a03')
const inputElement10 : HTMLInputElement = <HTMLInputElement>document.getElementById('a10')
const inputElement11 : HTMLInputElement = <HTMLInputElement>document.getElementById('a11')
const inputElement12 : HTMLInputElement = <HTMLInputElement>document.getElementById('a12')
const inputElement13 : HTMLInputElement = <HTMLInputElement>document.getElementById('a13')
const inputElement20 : HTMLInputElement = <HTMLInputElement>document.getElementById('a20')
const inputElement21 : HTMLInputElement = <HTMLInputElement>document.getElementById('a21')
const inputElement22 : HTMLInputElement = <HTMLInputElement>document.getElementById('a22')
const inputElement23 : HTMLInputElement = <HTMLInputElement>document.getElementById('a23')
const inputElement30 : HTMLInputElement = <HTMLInputElement>document.getElementById('a30')
const inputElement31 : HTMLInputElement = <HTMLInputElement>document.getElementById('a31')
const inputElement32 : HTMLInputElement = <HTMLInputElement>document.getElementById('a32')
const inputElement33 : HTMLInputElement = <HTMLInputElement>document.getElementById('a33')

function showNull(){

    if (inputElement.value&&inputElement1.value&&inputElement2.value&&inputElement3.value&&inputElement1.value&&inputElement1.value&&inputElement1.value&&inputElement1.value&&inputElement2.value&&inputElement2.value&&inputElement2.value&&inputElement2.value&&inputElement3.value&&inputElement3.value&&inputElement3.value&&inputElement3.value === '0') {
        results.innerHTML = ""
        results.innerHTML += `
        <h1>Es nulo</h1>
        
        `   
    }else{
       
        results.innerHTML = ""
        results.innerHTML += `
        <h1>No es nulo</h1>
        
        `
    }

}
function showDeterminant() {
   let a00 = parseInt(inputElement.value);
   let a01 = parseInt(inputElement1.value);
   let a02 = parseInt(inputElement2.value);
   let a03 = parseInt(inputElement3.value);
   let a10 = parseInt(inputElement10.value);
   let a11 = parseInt(inputElement11.value);
   let a12 = parseInt(inputElement12.value);
   let a13 = parseInt(inputElement13.value);
   let a20 = parseInt(inputElement20.value);
   let a21 = parseInt(inputElement21.value);
   let a22 = parseInt(inputElement22.value);
   let a23 = parseInt(inputElement23.value);
   let a30 = parseInt(inputElement30.value);
   let a31 = parseInt(inputElement31.value);
   let a32 = parseInt(inputElement32.value);
   let a33 = parseInt(inputElement33.value);

   let Ta00=a00*(a11*a22*a33+
    a32*a21*a13+
    a12*a23*a31+
    a31*a22*a13*-1+
    a32*a23*a11*-1+
    a12*a21*a33*-1);

    let Ta01 = (a01*-1)*(a10*a22*a33+
    a12*a23*a30+
    a32*a20*a13+
    a30*a22*a13*-1+
    a32*a23*a10*-1+
    a12*a20*a33*-1);

    let Ta02=a02*(a10*a21*a33+
    a11*a23*a30+
    a31*a20*a13+
    a30*a21*a13*-1+
    a11*a20*a33*-1+
    a31*a23*a10*-1);

    let Ta03=(a03*-1)*(a10*a21*a32+
    a11*a22*a30+
    a31*a20*a12+
    a30*a21*a12*-1+
    a31*a22*a10*-1+
    a11*a20*a32*-1);

    let total=Ta00+Ta01+Ta02+Ta03;
    results.innerHTML = ""
    results.innerHTML += `
    <h1>El numero determinante es : ${total}</h1>
    
    `   
    }
function investMatriz() {


    let a00old = inputElement.value;
    let a01old = inputElement1.value;
    let a02old = inputElement2.value;
    let a03old = inputElement3.value;
    let a10old = inputElement10.value;
    let a11old = inputElement11.value;
    let a12old = inputElement12.value;
    let a13old = inputElement13.value;
    let a20old = inputElement20.value;
    let a21old = inputElement21.value;
    let a22old = inputElement22.value;
    let a23old = inputElement23.value;
    let a30old = inputElement30.value;
    let a31old = inputElement31.value;
    let a32old = inputElement32.value;
    let a33old = inputElement33.value;

    inputElement.value = a30old;
    inputElement10.value = a31old;
    inputElement31.value = a10old;
    inputElement20.value = a32old;
    inputElement32.value = a20old;
    inputElement30.value = a33old;
    inputElement33.value = a30old;

    inputElement3.value = a00old
    inputElement13.value = a01old
    inputElement1.value = a13old
    inputElement23.value = a02old
    inputElement2.value = a23old
    


    



 
}
function showSymmetrical(){
  
    if (inputElement1.value === inputElement10.value&& inputElement20.value === inputElement2.value&& inputElement30.value === inputElement3.value&& inputElement31.value === inputElement13.value && inputElement32.value === inputElement12.value ) {
        results.innerHTML = ""
        results.innerHTML += `
        <h1>Es Simetrico</h1>
        
        `   
    }else{
        results.innerHTML = ""
        results.innerHTML += `
        <h1>No es Simetrico</h1>
        
        `   
    }
}


function showColumn3(){
  
    
    results.innerHTML = ""
    results.innerHTML += `
    <h1>Numeros de la columna = ${inputElement3.value} ${inputElement13.value} ${inputElement23.value} ${inputElement33.value}</h1>
    
    `

}
function showRow(){
   
    results.innerHTML = ""
    results.innerHTML += `
    <h1>Numeros de la Fila = ${inputElement20.value} ${inputElement21.value} ${inputElement22.value} ${inputElement23.value}</h1>
    
    `
    
    
}
function start() {
   
    
    if (inputElement.value&&inputElement1.value&&inputElement2.value&&inputElement3.value&&inputElement10.value&&inputElement11.value&&inputElement12.value&&inputElement13.value&&inputElement20.value&&inputElement21.value&&inputElement22.value&&inputElement23.value&&inputElement30.value&&inputElement31.value&&inputElement32.value&&inputElement33.value) {
        document.getElementById("invest").style.display='block';
        document.getElementById("symmetrical").style.display='block';
        document.getElementById("null").style.display='block';
        document.getElementById("determinant").style.display='block';
        document.getElementById("column3").style.display='block';
        document.getElementById("row").style.display='block';

        invest.addEventListener('click',investMatriz)
        determinant.addEventListener('click',showDeterminant)
        symmetrical.addEventListener('click',showSymmetrical)
        nul.addEventListener('click', showNull)
        row.addEventListener('click', showRow)
        column3.addEventListener('click', showColumn3)
        console.log("Todos los campos rellenos");        
    }else{
        document.getElementById("invest").style.display='none';
        document.getElementById("symmetrical").style.display='none';
        document.getElementById("null").style.display='none';
        document.getElementById("determinant").style.display='none';
        document.getElementById("column3").style.display='none';
        document.getElementById("row").style.display='none';
        results.innerHTML = ""
    }
    
}
window.onchange = start
