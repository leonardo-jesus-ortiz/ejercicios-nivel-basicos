//Leer un número entre 0 y 9, imprimirlo en letras
let numero = Number(prompt("Introduce un número entre 0 y 9: "));
let numerosEnLetras = ["cero", "uno", "dos", "tres", "cuatro", "cinco", "seis", "siete", "ocho", "nueve"];
if (numero >= 0 && numero <= 9) {
    console.log(`El número ${numero} en letras es: ${numerosEnLetras[numero]}`);
} else {
    console.log("Número fuera de rango. Debe ser entre 0 y 9.");
}