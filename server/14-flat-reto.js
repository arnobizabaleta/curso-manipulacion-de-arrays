/*
reto14: crear una funcion que emule el metodo flat:Llevar un array a su nivel mínimo
*/
const Matriz = [
    [1,2,3],
    [4,5,6, [1,2, [3,4]]],
    [7,[8,9,[10,11,12]],13,14]
];

function aplanarMatriz(matriz) {
    let newArray = [];
    for(element of matriz) {
        if(Array.isArray(element)) {
            newArray = newArray.concat(aplanarMatriz(element));
        }else{
            newArray.push(element);
        }
    }
    return newArray;
}
console.log(aplanarMatriz(Matriz));
//El método Array.isArray() determina si el valor pasado es un Array.