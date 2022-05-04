/*
Este método es el contrario a some(), 
devuelve true o false sí TODOS los elementos del array cumplen la condición.
*/

const numbers = [6,4,15,20,24,28,39,40];

const rta = numbers.every(number => number <= 40);

console.log("rta",rta);