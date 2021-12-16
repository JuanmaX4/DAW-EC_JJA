var invest = document.getElementById("invest");
var symmetrical = document.getElementById("symmetrical");
var nul = document.getElementById("null");
var determinant = document.getElementById("determinant");
var column3 = document.getElementById("column3");
var row = document.getElementById("row");
var results = document.getElementById("results");
invest.style.display = 'none';
symmetrical.style.display = 'none';
nul.style.display = 'none';
determinant.style.display = 'none';
column3.style.display = 'none';
row.style.display = 'none';
var inputElement = document.getElementById('a00');
var inputElement1 = document.getElementById('a01');
var inputElement2 = document.getElementById('a02');
var inputElement3 = document.getElementById('a03');
var inputElement10 = document.getElementById('a10');
var inputElement11 = document.getElementById('a11');
var inputElement12 = document.getElementById('a12');
var inputElement13 = document.getElementById('a13');
var inputElement20 = document.getElementById('a20');
var inputElement21 = document.getElementById('a21');
var inputElement22 = document.getElementById('a22');
var inputElement23 = document.getElementById('a23');
var inputElement30 = document.getElementById('a30');
var inputElement31 = document.getElementById('a31');
var inputElement32 = document.getElementById('a32');
var inputElement33 = document.getElementById('a33');
function showNull() {
    if (inputElement.value && inputElement1.value && inputElement2.value && inputElement3.value && inputElement1.value && inputElement1.value && inputElement1.value && inputElement1.value && inputElement2.value && inputElement2.value && inputElement2.value && inputElement2.value && inputElement3.value && inputElement3.value && inputElement3.value && inputElement3.value === '0') {
        results.innerHTML = "";
        results.innerHTML += "\n        <h1>Es nulo</h1>\n        \n        ";
    }
    else {
        results.innerHTML = "";
        results.innerHTML += "\n        <h1>No es nulo</h1>\n        \n        ";
    }
}
function showDeterminant() {
    var a00 = parseInt(inputElement.value);
    var a01 = parseInt(inputElement1.value);
    var a02 = parseInt(inputElement2.value);
    var a03 = parseInt(inputElement3.value);
    var a10 = parseInt(inputElement10.value);
    var a11 = parseInt(inputElement11.value);
    var a12 = parseInt(inputElement12.value);
    var a13 = parseInt(inputElement13.value);
    var a20 = parseInt(inputElement20.value);
    var a21 = parseInt(inputElement21.value);
    var a22 = parseInt(inputElement22.value);
    var a23 = parseInt(inputElement23.value);
    var a30 = parseInt(inputElement30.value);
    var a31 = parseInt(inputElement31.value);
    var a32 = parseInt(inputElement32.value);
    var a33 = parseInt(inputElement33.value);
    var Ta00 = a00 * (a11 * a22 * a33 +
        a32 * a21 * a13 +
        a12 * a23 * a31 +
        a31 * a22 * a13 * -1 +
        a32 * a23 * a11 * -1 +
        a12 * a21 * a33 * -1);
    var Ta01 = (a01 * -1) * (a10 * a22 * a33 +
        a12 * a23 * a30 +
        a32 * a20 * a13 +
        a30 * a22 * a13 * -1 +
        a32 * a23 * a10 * -1 +
        a12 * a20 * a33 * -1);
    var Ta02 = a02 * (a10 * a21 * a33 +
        a11 * a23 * a30 +
        a31 * a20 * a13 +
        a30 * a21 * a13 * -1 +
        a11 * a20 * a33 * -1 +
        a31 * a23 * a10 * -1);
    var Ta03 = (a03 * -1) * (a10 * a21 * a32 +
        a11 * a22 * a30 +
        a31 * a20 * a12 +
        a30 * a21 * a12 * -1 +
        a31 * a22 * a10 * -1 +
        a11 * a20 * a32 * -1);
    var total = Ta00 + Ta01 + Ta02 + Ta03;
    results.innerHTML = "";
    results.innerHTML += "\n    <h1>El numero determinante es : ".concat(total, "</h1>\n    \n    ");
}
function investMatriz() {
    var a00old = inputElement.value;
    var a01old = inputElement1.value;
    var a02old = inputElement2.value;
    var a03old = inputElement3.value;
    var a10old = inputElement10.value;
    var a11old = inputElement11.value;
    var a12old = inputElement12.value;
    var a13old = inputElement13.value;
    var a20old = inputElement20.value;
    var a21old = inputElement21.value;
    var a22old = inputElement22.value;
    var a23old = inputElement23.value;
    var a30old = inputElement30.value;
    var a31old = inputElement31.value;
    var a32old = inputElement32.value;
    var a33old = inputElement33.value;
    inputElement.value = a30old;
    inputElement10.value = a31old;
    inputElement31.value = a10old;
    inputElement20.value = a32old;
    inputElement32.value = a20old;
    inputElement30.value = a33old;
    inputElement33.value = a30old;
    inputElement3.value = a00old;
    inputElement13.value = a01old;
    inputElement1.value = a13old;
    inputElement23.value = a02old;
    inputElement2.value = a23old;
}
function showSymmetrical() {
    if (inputElement1.value === inputElement10.value && inputElement20.value === inputElement2.value && inputElement30.value === inputElement3.value && inputElement31.value === inputElement13.value && inputElement32.value === inputElement12.value) {
        results.innerHTML = "";
        results.innerHTML += "\n        <h1>Es Simetrico</h1>\n        \n        ";
    }
    else {
        results.innerHTML = "";
        results.innerHTML += "\n        <h1>No es Simetrico</h1>\n        \n        ";
    }
}
function showColumn3() {
    results.innerHTML = "";
    results.innerHTML += "\n    <h1>Numeros de la columna = ".concat(inputElement3.value, " ").concat(inputElement13.value, " ").concat(inputElement23.value, " ").concat(inputElement33.value, "</h1>\n    \n    ");
}
function showRow() {
    results.innerHTML = "";
    results.innerHTML += "\n    <h1>Numeros de la Fila = ".concat(inputElement20.value, " ").concat(inputElement21.value, " ").concat(inputElement22.value, " ").concat(inputElement23.value, "</h1>\n    \n    ");
}
function start() {
    if (inputElement.value && inputElement1.value && inputElement2.value && inputElement3.value && inputElement10.value && inputElement11.value && inputElement12.value && inputElement13.value && inputElement20.value && inputElement21.value && inputElement22.value && inputElement23.value && inputElement30.value && inputElement31.value && inputElement32.value && inputElement33.value) {
        document.getElementById("invest").style.display = 'block';
        document.getElementById("symmetrical").style.display = 'block';
        document.getElementById("null").style.display = 'block';
        document.getElementById("determinant").style.display = 'block';
        document.getElementById("column3").style.display = 'block';
        document.getElementById("row").style.display = 'block';
        invest.addEventListener('click', investMatriz);
        determinant.addEventListener('click', showDeterminant);
        symmetrical.addEventListener('click', showSymmetrical);
        nul.addEventListener('click', showNull);
        row.addEventListener('click', showRow);
        column3.addEventListener('click', showColumn3);
        console.log("Todos los campos rellenos");
    }
    else {
        document.getElementById("invest").style.display = 'none';
        document.getElementById("symmetrical").style.display = 'none';
        document.getElementById("null").style.display = 'none';
        document.getElementById("determinant").style.display = 'none';
        document.getElementById("column3").style.display = 'none';
        document.getElementById("row").style.display = 'none';
        results.innerHTML = "";
    }
}
window.onchange = start;
