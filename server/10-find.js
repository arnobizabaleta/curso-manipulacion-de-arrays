//Find devuelve un objeto, directamente el que cumple con la condicional dentro del array
//Devuelve el primer elemento que hizo match o coincidencia con la condición 
/* 
El método find() devuelve el primer elemento del array 
que cumpla con la condición dada o si no  devuelve undefined
 si es que no encuentra ningún elemento que cumpla los requisitos pedidos.

 FindIndex: retorna el indice del elemento (regresa la posicion del elemento en el array) 
que cumpla con la condicion de busqueda al igual que find(el primero)
si no encuentra el elemento retornará un -1
*/
const numbers = [1,30,49,29,10,13];

let rta = undefined;
for (let index = 0; index < numbers.length; index++) {
  const element = numbers[index];
  if (element === 303) {
    rta = element;
    break;
  }
}
console.log('for', rta);
const rta2 = numbers.find(item => item === 303)
console.log('find', rta2);

const products = [
    {
      name: "Pizza",
      price: 12,
      id: '🍕'
    },
    {
      name: "Burger",
      price: 23,
      id: '🍔'
    },
    {
      name: "Hot dog",
      price: 34,
      id: '🌭'
    },
    {
      name: "Hot cakes",
      price: 355,
      id: '🥞'
    },
  ];
  
  const rta3 = products.find(item => item.id === '🍔')
  console.log('find', rta3);
  const rta4 = products.findIndex(item => item.id === '🍔')
  console.log('findIndex', rta4);