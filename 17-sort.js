//El método sort es un método mutable 
//Cada vez que se aplique, va a cambiar el orden del array original
//Va ordenarlo por defecto, según crtierio propio
//Por defecto ordena el array segun el código ASCII: Orden alfabetico

const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months);
const numbers = [1, 30, 4, 21, 100000];
numbers.sort((a,b) => b - a);
console.log(numbers);
const words = ['réservé', 'premier', 'communiqué', 'café', 'adieu', 'éclair', 'banana'];
words.sort((a,b) => a.localeCompare(b));
console.log(words);
const orders = [
    {
      customerName: "Nicolas",
      total: 600,
      delivered: true,
    },
    {
      customerName: "Zulema",
      total: 120,
      delivered: false,
    },
    {
      customerName: "Santiago",
      total: 1840,
      delivered: true,
    },
    {
      customerName: "Valentina",
      total: 240,
      delivered: true,
    },
  ];
  orders.sort((a,b) => b.total - a.total);
  console.log(orders);


//¿Por qué a - b o b - a?
/*La función que le enviamos a sort es la función compareFn donde:

Si compareFn(a, b) devuelve un valor mayor que 0, ordena b antes a.
Si compareFn(a, b) devuelve un valor menor que 0, ordena a antes b.
Si compareFn(a, b) devuelve 0 a y b se consideran iguales.
*/