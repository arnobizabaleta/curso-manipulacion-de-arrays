/*
El metodo .splice()
Array.splice(indice,NroElementosAEliminarFromThatPosition)
Este método es muy utilizado para eliminar uno o más elemento dentro de un array
*/

const products = [
    { title: "Pizza", price: 121, id: "🍕" },
    { title: "Burger", price: 121, id: "🍔" },
    { title: "Hot cakes", price: 121, id: "🥞" },
  ];
  const myProducts = [];
  console.log("products", products);
  console.log("myProducts", myProducts);
  console.log("-".repeat(10));
  const productIndex = products.findIndex(item => item.id === '🍔');
  if (productIndex !== -1) {
      myProducts.push(products[productIndex]);
      products.splice(productIndex, 1);
  }
  console.log("products", products);
  console.log("myProducts", myProducts);
  console.log("-".repeat(10));

  // Update

const productsV2 = [
    { title: "Pizza", price: 121, id: "🍕" },
    { title: "Burger", price: 121, id: "🍔" },
    { title: "Hot cakes", price: 121, id: "🥞" },
  ];
const update = {
    id: "🥞",
    changes: {
        price: 200,
        description: 'delicioso'
    }
}
const productIndexV2 = productsV2.findIndex(item => item.id === update.id);
productsV2[productIndexV2] = {
    ...productsV2[productIndexV2],
    ...update.changes,
};
console.log(productsV2);

//con ...productsV2[productIndexV2] conservamos la información del array en ese index
// y con ...update.changes, fusionamos lo que ya había en productsV2 con update.changes