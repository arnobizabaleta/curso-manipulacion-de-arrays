//Validar si todos los miembros del elquipo son menores a 18 años
const team = [
    {
      name: "Nicolas",
      age: 12,
    },
    {
      name: "Andrea",
      age: 8,
    },
    {
      name: "Zulema",
      age: 2,
    },
    {
      name: "Santiago",
      age: 17,
    },
  ];
 
  const rta = team.every(player => player.age < 18);

  console.log("rta",rta);