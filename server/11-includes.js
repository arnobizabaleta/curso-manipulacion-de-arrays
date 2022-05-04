/*
El método includes() determina si una array incluye un determinado elemento, 
devuelve true o false según corresponda.
includes(elementoAbuscar);
includes no recibe una arrow function, sirve para arrays y para string
*/

const pets = ['cat', 'dog', 'bat'];

let includeInArray = false;
for (let index = 0; index < pets.length; index++) {
    const element = pets[index];
    if (element === 'dog') {
        includeInArray = true;
        break;
    }
}

const rta = pets.includes("dog");
console.log('for', includeInArray);
console.log('includes', rta);