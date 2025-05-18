//Leer una distancia en cm, imprimirla en m si es < 1000, si no en km e indicar la unidad
let distanciaCm = Number(prompt("Introduce una distancia en cm: "));
if (distanciaCm < 1000) {
    let distanciaM = distanciaCm / 100;
    console.log(`La distancia es: ${distanciaM} m`);
} else {
    let distanciaKm = distanciaCm / 100000;
    console.log(`La distancia es: ${distanciaKm} km`);
}