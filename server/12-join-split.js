/*
El método join() une todos los elementos de un array en una cadena y devuelve esta cadena. 
Podemos pasarle cualquier elemento como separador que deseemos.
*/

const elements = ["Fire", "Air", "Water"];

let rtaFinal = '';
const separator = '--';
for (let index = 0; index < elements.length; index++) {
    const element = elements[index];
    rtaFinal = rtaFinal + element + separator;
}
console.log('for', rtaFinal);
const rta = elements.join("--");
console.log('join', rta);
/*
Y el método split() divide un objeto de tipo String en un array de cadenas 
mediante la separación de la cadena en sub-cadenas.
*/
const title = 'Curso de manipulación de arrays';

const urlFinal = title.split(' ').join('-').toLowerCase();
//toLowerCase(string) Devuelve un string entero con todos los carcterés en minisuculas;
console.log(urlFinal)