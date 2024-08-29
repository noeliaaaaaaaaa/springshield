//funcion que me devuelva entre 0 y x

function randomEntreCeroYX (x){
    let numero = Math.random(); // nos devuelve un num entre 0 y 1 ( puede ser con dcimal)
    numero = numero * x;
    return Math.floor(numero);
};

let numeroRandom = randomEntreCeroYX(10);
console.log(numeroRandom);

//objetos
//son tipos de datos
let alumno = {
    nombre: "juan",
    edad: 17,
    deporte: "futbol",
};
//asignación - notacion de punto

console.log(alumno.nombre);

alumno.nombre = "Perez";

//destructuracion de objetos

let {nombre, edad, deporte} = alumno;
//obtengo un objeto, y lo puedo desarmar para que dejen de ser objetos y pasen a ser variables por separado. 

console.log(nombre, edad, deporte);



// json ---> JavaScript Obtect Notation
let objetojson = {"Nombre": "Juan", "edad": "24", "deporte" : "Voley"};