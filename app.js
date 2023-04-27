
console.log("METODO 01")

const año = new Date().getFullYear();
let añoNac = prompt("¿En qué año naciste?");
const edad = año - añoNac;
console.log(`Tu edad es ${edad} años.`);

console.log("METODO 02")

const año1 = 2023;
let añoNac1 = prompt("¿En qué año naciste?");
const edad1 = año1 - añoNac1;
console.log(`Tu edad es ${edad1} años.`);


console.log("EJERCICIO 02_____________________________________________")

let a = 10;
let b = 15;

function sumar(a, b) {
    const resultado = a + b;
    console.log(`La suma es: ${resultado}`);
}

function restar(a, b) {
    const resultado = a - b;
    console.log(`La resta  es: ${resultado}`);
}

function multiplicar(a, b) {
    const resultado = a * b;
    console.log(`La multiplicacion es: ${resultado}`);
}

function dividir(a, b) {
    if (b === 0) {
        console.log("INVALIDO");
    } else {
        const resultado = a / b;
        console.log(`La division es: ${resultado}`);
    }
}


