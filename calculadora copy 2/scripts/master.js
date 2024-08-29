//array ----> en vez de tener muchas variables, puedo definir un arreglo
let edades = []; // vacio 
const edad = [17, 18, 16]; //para definir un arreglo constante = los valores no se pueden cambiar
let nombre =["juan", "pedro", "jose"];
let jugadores =[
    {nombre: "juan", edad: 17, skill:""},  
    {nombre: "pedro", edad: 18, skill:""},  
    {nombre: "jose", edad: 16, skill:""} //ordenamos arrays con objetos dentro
];
let partidad = [[], {}, "", 15];

//notacion de corchetes obtengo un elemento
console.log("la edad es: ", edad[0]);

//notacion de corchetes para asignar valor a un elemento
edad[0] = 15;

// metodos de los arreglos
edades.push(5); //push es para agregar un elemento/algo. y lo arregla al final

edad.pop(); //quita el ultimo elemento

//lengh = longitud
edad.length();

comidas.map((comida)=>{
    
})
console.log('edad 1: ', edad[0]);


//en vez de repetir varias veces imprimir una edad, esto lo va haciendo en ciclos. para no repetir codigo, sin importar cuantos elementos tenga.
edad.map((edad) => {
    console.log("la edad es ", edad)
}) 

//modulación = trabajar con módulos


