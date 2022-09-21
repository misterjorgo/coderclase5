const animales = [
  {
    nombre: "perro",
    especie: "canino",
  },
  {
    nombre: "caballo",
    especie: "equino",
  },
];

let animals = document.getElementById("container");

animales.forEach((animal) => {
  animals.innerHTML += `<p> Animal : ${animal.nombre} </br> especie : ${animal.especie}</p>`;
});
