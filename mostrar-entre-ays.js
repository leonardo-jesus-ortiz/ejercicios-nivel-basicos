//Leer dos números A y S, luego pedir un número y mostrar si está dentro del intervalo [A, S].

let A = 10;
let S = 100;
let numero = Number(prompt("Introduce un número: "));

if (numero >= A && numero <= S) {
    console.log(`la variable ${numero} está dentro del intervalo [${A} y ${S}]`);
}else{
    console.log(`la variable ${numero} no está dentro del intervalo [${A} y ${S}]`);
}