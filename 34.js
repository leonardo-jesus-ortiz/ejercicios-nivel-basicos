//Leer dos números y sumarlos. Si la suma > 50, calcular raíz cuadrada; si no, el cuadrado
let num1 = Number(prompt("Introduce el primer número: "));
let num2 = Number(prompt("Introduce el segundo número: "));
let suma = num1 + num2;
console.log(`La suma de ${num1} y ${num2} es: ${suma}`);
if (suma > 50) {
    let raizCuadrada = Math.sqrt(suma);
    console.log(`La raíz cuadrada de la suma es: ${raizCuadrada}`);
} else {
    let cuadrado = suma * suma;
    console.log(`El cuadrado de la suma es: ${cuadrado}`);
}