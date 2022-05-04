/* 
¿Qué hace el .map()? TRANSFORMAR.

.map() es INMUTABLE por lo tanto no modifica el array original, 
sino que crea uno nuevo con la “transformación” aplicada.
.
Además, mantienes el mismo length que el array original, 
te devuelve en el nuevo array la misma cantidad que el array que le aplicaste el método.
*/

const letters = ['a','b','c'];

const newArray = letters.map(item => item + '++');
// const newArray = [];
// for (let index = 0; index < letters.length; index++) {
//     const element = letters[index];
//     newArray.push(element + '++');
// }
console.log('original', letters);
console.log('new', newArray);

/*
El método join() une todos los elementos de una matriz (o un objeto similar a una matriz) 
en una cadena y devuelve esta cadena.
const elements = ['Fire', 'Air', 'Water'];

console.log(elements.join());
expected "Fire,Air,Water"

console.log(elements.join(''));
expected  "FireAirWater"

console.log(elements.join('-'));
expected "Fire-Air-Water"
*/