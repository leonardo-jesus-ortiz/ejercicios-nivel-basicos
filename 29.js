//Leer base y altura, calcular perímetro de un rectángulo e informar si es cuadrado
let base = Number(prompt("Introduce la base del rectángulo: "));
let altura = Number(prompt("Introduce la altura del rectángulo: "));
let perimetro = 2 * (base + altura);
console.log(`El perímetro del rectángulo es: ${perimetro}`);
if (base === altura) {
    console.log("El rectángulo es un cuadrado.");
} else {
    console.log("El rectángulo no es un cuadrado.");
}