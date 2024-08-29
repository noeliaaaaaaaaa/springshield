//prompt("Hola mundo"); --> para pedirle algo al usuario. 


//funciones
//funcion declarada :

function sumar(a, b){
     return(a+b);
}

//norma o convención: un set de reglas que se ponen de acuerdo para hacer las cosas de una forma durante el código. el código funciona igual si cumplo las reglas o no. lo importante es que funcione. 

let resultado = sumar(2, 5);   //las funciones hay que guardar el return en alguna variable. let si va a cambiar el valor, const si no.

console.log(resultado); //para imprimir

//función expresada: ---> se basa en guardar la funcion en una constante.
let suma = function sumar2(a, b){
    console.log(a + b);
}

//funciones anónimas: solo se puede llamar despues de estar escrita la funcion
let resta = function(a, b){
    console.log(a - b);
}

resta(8, 8);


//arrow function ---> funcion flecha ---> 
let multiplicar = (a, b) => a * b;

multiplicar(1, 2);


//prompt es para pedirle algo al usuario, y eso también se puede guardar:
let numero = prompt("Decime un número");
let numero2 = prompt("Decime otro número");

//para usarlos de parametro en las funciones:
let result = sumar(parseInt(numero), parseInt(numero2));

alert("El resultado es: " + result);


//parciar una variable: cambiar el tipo de variable ---> parseInt, parseFloat, etc.

