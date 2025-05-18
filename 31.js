//Leer dos números, si el segundo es menor, calcular el producto; si no, el cociente del segundo con el primero
let num1 = Number(prompt("Introduce el primer número: "));
let num2 = Number(prompt("Introduce el segundo número: "));
if (num2 < num1) {
    let producto = num1 * num2;
    console.log(`El producto de ${num1} y ${num2} es: ${producto}`);
} else {
    if (num1 !== 0) {
        let cociente = num2 / num1;
        console.log(`El cociente de ${num2} entre ${num1} es: ${cociente}`);
    } else {
        console.log("No se puede dividir entre cero.");
    }
}