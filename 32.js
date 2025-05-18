//Leer un número, determinar si su mitad es igual a su raíz cuadrada
let numero = Number(prompt("Introduce un número: "));
let mitad = numero / 2;
let raizCuadrada = Math.sqrt(numero);
if (mitad === raizCuadrada) {
    console.log(`La mitad de ${numero} es igual a su raíz cuadrada.`);
} else {
    console.log(`La mitad de ${numero} no es igual a su raíz cuadrada.`);
}