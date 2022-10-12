const respuesta = prompt("Que te gustan los zorros o los caballos?");

respuesta.toUpperCase() === "CABALLOS"
  ? Swal.fire("Genial", "Ami tambien me gustan los caballos", "question")
  : Swal.fire("Genial", "Tambien son un gran animal haha", "question");

let imagen;
if (respuesta.toUpperCase === "CABALLOS") {
  imagen = createElement("img");
  imagen.src =
    "https://www.freepik.es/vector-gratis/diseno-zorro-pintado-mano_975551.htm#query=zorro&position=2&from_view=search&track=sph";
} else {
  imagen = createElement("img");
  imagen.src =
    "https://www.google.com/search?q=caballo&sxsrf=ALiCzsYSHsVGyhtctwVt5BAiwXsBR_85aQ:1665551832690&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjqpN6K-Nn6AhWVrmoFHYtiCOAQ_AUoAXoECAEQAw&biw=1536&bih=746&dpr=1.25#imgrc=7C-sZbd0H7PpjM";
}

const container = document.getElementById("container");

const div = document.createElement("div");

div.append(imagen.src);
