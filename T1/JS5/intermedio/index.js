function index(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user = { firstName: "Jane", lastName: "User" };
document.body.textContent = index(user);


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
