//Leer un número, determinar si su tercio es igual a su raíz cúbica
let numero = Number(prompt("Introduce un número: "));
let tercio = numero / 3;
let raizCubica = Math.cbrt(numero);
if (tercio === raizCubica) {
    console.log(`El tercio de ${numero} es igual a su raíz cúbica.`);
} else {
    console.log(`El tercio de ${numero} no es igual a su raíz cúbica.`);
}