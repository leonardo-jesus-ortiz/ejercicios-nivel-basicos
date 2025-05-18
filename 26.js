//Pedir dos números y mostrar si la suma de ambos es mayor que 730.

let num1 = Number(prompt("Introduce el primer número: "));
let num2 = Number(prompt("Introduce el segundo número: "));
let suma = num1 + num2;

if (suma > 730) {
    console.log(`La suma de ${num1} y ${num2} es ${suma}, y es mayor que 730.`);
}else if (suma < 730) {
    console.log(`La suma de ${num1} y ${num2} es ${suma}, y es menor que 730.`);
}