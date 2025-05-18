//Leer los siguientes datos:
//Kilómetros recorridos 
//Precio del litro de combustible 
//Kilómetros que rinde cada litro

//Calcular:
//Litros consumidos
//Importe total gastado
//Mostrar ambos resultados (Incluir ejemplo con datos reales y prueba de escritorio)

let kmrecorridos = Number(prompt("Ingrese los kilómetros recorridos:"));
let preciolitro = Number(prompt("Ingrese el precio del litro de combustible:"));
let kmrinde = Number(prompt("Ingrese los kilómetros que rinde cada litro:"));

let litros_consumidos = kmrecorridos / kmrinde;
let importe_total = litros_consumidos * preciolitro;
console.log("Litros consumidos: " + litros_consumidos + " litros de combustible");
console.log("Importe total gastado: " + importe_total + " pesos");
//ejemplo con datos reales
//kmrecorridos = 1000
//preciolitro = 100
//kmrinde = 10
//litros_consumidos = 1000 / 10 = 100
//importe_total = 100 * 100 = 10000
