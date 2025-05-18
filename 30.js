//Leer radio de una circunferencia, calcular perímetro, informar si es mayor que 50
let radio = Number(prompt("Introduce el radio de la circunferencia: "));
let perimetro = 2 * Math.PI * radio;
console.log(`El perímetro de la circunferencia es: ${perimetro}`);
if (perimetro > 50) {
    console.log("El perímetro es mayor que 50.");
} else {
    console.log("El perímetro no es mayor que 50.");
}