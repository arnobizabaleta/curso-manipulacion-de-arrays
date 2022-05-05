/*
Ordenar el objeto orders según sus fechas, de las mas recientes a la más antiguas
*/
const orders = [
    {
      customerName: "Nicolas",
      total: 600,
      delivered: true,
      date: new Date (2021, 3, 8, 4),
    },
    {
      customerName: "Zulema",
      total: 120,
      delivered: false,
      date: new Date (2021, 9, 12, 3),
    },
    {
      customerName: "Santiago",
      total: 1840,
      delivered: true,
      date: new Date (2021, 8, 2, 2),
    },
    {
      customerName: "Valentina",
      total: 240,
      delivered: true,
      date: new Date(2021, 1, 1, 9, 30),
    },
  ];
  orders.sort((a,b) =>  b.date - a.date);
  console.log(orders);