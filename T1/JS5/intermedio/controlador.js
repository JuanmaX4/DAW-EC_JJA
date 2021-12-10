function controlador(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var arr_names = new Array(4);
function array() {
    for (var i = 0; i < arr_names.length; i++) {
        arr_names[i] = i * 2;
        console.log(arr_names[i]);
    }
}
var usuario = { firstName: "Jane", lastName: "User" };
document.body.textContent = index(usuario);
document.body.textContent = index(arr_names);
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
