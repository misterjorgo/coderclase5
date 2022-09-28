function recogeDatos(evento) {
  evento.preventDefault();

  let fecha = document.querySelector("#fecha").value;
  let edad = 2019 - fecha;
  let nombre = document.querySelector("#nombre").value;

  let bienvenida = document.querySelector("#bienvenida");
  let mensajeEdad;

  let mensaje;

  if (edad > 30) {
    mensajeEdad = "abuelo!";
  } else if (edad < 30) {
    mensajeEdad = "jovenzuelo!";
  } else {
    mensajeEdad = "no me lo creo.";
  }

  mensaje =
    "<p>hola, " +
    nombre +
    ", tienes " +
    edad +
    " años, " +
    mensajeEdad +
    "</p>";

  bienvenida.innerHTML = mensaje;
}

let miForm = document.querySelector("#formulario");

miForm.addEventListener("submit", recogeDatos);
