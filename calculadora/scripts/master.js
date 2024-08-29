function sumar(a, b){
    return a + b;
}

function dividir(a, b){
    if (b > 0){
        return a/b;
    } 
    return (alert("Chabón media pila"));
    
}

let resta = (a, b) => a -b;

let multiplicar = (a, b) => a *b;

let numeroUno = parseInt(prompt("Ingrese un número"));
let numeroDos = parseInt(prompt("Ingrese otro número"));


let operacion = prompt("... opciones");
let result = sumar(parseInt(numero), parseInt(numero2));
let resulta = sumar(parseInt(numero), parseInt(numero2));
let resultad = sumar(parseInt(numero), parseInt(numero2));
let resultado = sumar(parseInt(numero), parseInt(numero2));
switch (operacion) {
    case 1:
        sumar(numeroUno, numeroDos);
        result = sumar(parseInt(numero), parseInt(numero2));
        break;
    case 2:
        restar(numeroUno, numeroDos);
        resulta = restar(parseInt(numero), parseInt(numero2));
        break;
    case 3:
        multiplicar(numeroUno, numeroDos);
        resultad = multiplicar(parseInt(numero), parseInt(numero2));
        break;
    case 4:
        dividir(numeroUno, numeroDos);
        resultado = dividir(parseInt(numero), parseInt(numero2));
        break;
    default:
        break;
}
alert("El resultado es: " + result);
