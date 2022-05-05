//Crear un nuevo array products que no incuya el elemento a eliminar
//Y que no modifique el contenido original de products
const products = [
    { title: "Pizza", price: 121, id: "🍕" },
    { title: "Burger", price: 121, id: "🍔" },
    { title: "Hot cakes", price: 121, id: "🥞" },
  ];
const myProducts = [];
  
const productIndex = products.findIndex(item => item.id === '🍔');
var updateProducts;

  if (productIndex !== -1) {
    myProducts.push(products[productIndex]);
    updateProducts = products.filter(product => product.id !== '🍔');
      
      
  }

  
  console.log("products", products);
  console.log("myProducts", myProducts);
  console.log("updateProducts", updateProducts);
 