//concat()
//metodo que se utiliza para agregar al final de un array otro arreglo o string
//Funciona mi array con el nuevoArray pasado por parametro o el string
//concat es un metodo inmutable
//Se le pasa como parametro el array que se concatena al array en el que se invocó el metodo

const elements = [1,1,2,2];
const othersElements = [3,3,4,4];

const newArray = [...elements];//Sprid operator: evitamos copiar la referencia en memoria del array elements
for (let index = 0; index < othersElements.length; index++) {
    const element = othersElements[index];
    newArray.push(element);
}

const rta = elements.concat(othersElements);//Array.contat(Array o string)
const rta2 = [...elements, ...othersElements];
const rta3 = [...elements, ...'random'];
console.log('for', newArray);
console.log('concat', rta);
console.log('...', rta2);
console.log('rta3', rta3);
elements.push(...othersElements);
console.log('elements', elements);