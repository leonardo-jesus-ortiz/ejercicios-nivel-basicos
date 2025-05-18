//Leer tres números, imprimir en orden ascendente
let num1 = Number(prompt("Introduce el primer número: "));
let num2 = Number(prompt("Introduce el segundo número: "));
let num3 = Number(prompt("Introduce el tercer número: "));
let numeros = [num1, num2, num3];
numeros.sort((a, b) => a - b);
console.log(`Los números en orden ascendente son: ${numeros.join(", ")}`);