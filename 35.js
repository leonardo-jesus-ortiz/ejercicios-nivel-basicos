//Calcular la parte entera de la raíz cúbica de un valor ≥ 1
let numero = Number(prompt("Introduce un número mayor o igual a 1: "));
if (numero >= 1) {
    let raizCubica = Math.cbrt(numero);
    let parteEntera = Math.floor(raizCubica);
    console.log(`La parte entera de la raíz cúbica de ${numero} es: ${parteEntera}`);
} else {
    console.log("El número debe ser mayor o igual a 1.");
}