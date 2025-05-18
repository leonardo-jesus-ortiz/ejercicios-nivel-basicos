//Leer tres números y mostrar si son distintos entre sí.

let num1 = Number(prompt("Ingrese el primer número:"));
let num2 = Number(prompt("Ingrese el segundo número:"));
let num3 = Number(prompt("Ingrese el tercer número:"));

if (num1 !== num2 && num1 !== num3 && num2 !== num3) {
    console.log("Los números son distintos entre sí.");
}else {
    console.log("Los números no son distintos entre sí.");
}