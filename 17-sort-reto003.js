//Desarrollar funcion para ordenar ascendentemente un array de números

function ordenarAscendemente(array){
    for(let i=1; i < array.length; i++){
        
        for(let j=0; j < array.length; j++){
           if(array[i] < array[j]){
            let aux = array[i];
            array[i] = array[j];
            array[j] = aux;
           }

        }
    }
    return array;
}
orderArray = [10,9,8];
ordenarAscendemente(orderArray);
console.log(orderArray);