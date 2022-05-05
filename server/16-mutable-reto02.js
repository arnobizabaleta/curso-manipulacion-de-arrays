// Como hacemos para crear un nuevo array de productsV2, incluyendo el update.changes
//Sin afectar al array original de productsV2, es decir, sin mutación.

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

const updateProducts = [...productsV2];
const productIndexV2 = productsV2.findIndex(item => item.id === update.id);

updateProducts[productIndexV2] = {
    ...updateProducts[productIndexV2],
    ...update.changes,
};
console.log("productsV2", productsV2);
console.log("updateProductsV2",updateProducts);
