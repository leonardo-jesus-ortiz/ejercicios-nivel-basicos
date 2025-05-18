//Leer un número del 1 al 7, imprimir el nombre del día de la semana
let dia = Number(prompt("Introduce un número del 1 al 7: "));
let dias = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
if (dia >= 1 && dia <= 7) {
    console.log(`El día de la semana es: ${dias[dia - 1]}`);
} else {
    console.log("Número inválido. Debe ser del 1 al 7.");
}