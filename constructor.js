const allAnimales = [];

class Animales {
  constructor(especie, peso, altura, sonido) {
    (this.especie = especie),
      (this.peso = peso),
      (this.altura = altura),
      (this.sonido = sonido);
  }
  habla() {
    return `${this.sonido}`;
  }
}

function addAnimal(classAnimal) {
  // let classAnimal;
  //   classAnimal = prompt("Cual clase de animal quieres agregar al array?");
  allAnimales.push(classAnimal);
  console.log(allAnimales);
}

let perro = new Animales("canino", "23kilos", "37cm", "Woua");
let gat = new Animales("felino", "12kiloa", "18cm", "Miau");
let cballos = new Animales(
  "equino",
  "200kilos",
  "2.45mts",
  "No se como suena un caballo"
);

addAnimal(perro);

//como pedir una clase con prompt y que el lenguaje no la interprete como string
// Como crear un array que guarde todas las clases que vayamos creando con el constructor
//como crear una funcion que reciba como parametro la variable que es = a un objeto el cual se construye o se construyo con un constructor.
