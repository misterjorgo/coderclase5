let presupuesto1 =
  "Casa con Jardin, jacuzzi pequeno y estacionamiento para 2 vehiculos";

let presupuesto2 =
  "Casa con jardin, picina olimpica, area de juegos y estacionamiento para 3 vehiculos";

let presupuesto3 =
  "Casa con jardin, piscina olimpica, jacuzzi, area de juegos, mini campo de golf y estacionamiento para 3 vehiculos";

function valorarBudget() {
  let budget = prompt("Cual es su presupuesto");
  let nombre = prompt("Cual es tu nombre");

  //   primer else
  if (budget <= 1000000 && budget > 800000 && budget > 1000000) {
    alert(
      `Hola ${nombre} tienes buen presupuesto puedes tener estos beneficios : ${presupuesto3}`
    );

    let confirm = prompt(
      "Se que asi no son las ventas solo pruebo mi software, pero, le gustaria comprar?, ahora tenemos una promocion si dice ahora mismo que si:), el precio normal $1000000, pero hoy si usted me dice le podemos dar un descuento sorpresa, como ve?, le gustaria comprar?"
    );
    if (confirm.toUpperCase != "NO") {
      let sorpresa = prompt(
        "Eliga un numero entero del 1 al 10, es para darle el descuento sorpresa"
      );
      let condiciones = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

      while (!condiciones.includes(sorpresa))
        sorpresa = prompt(
          "Eliga un numero entero del 1 al 10, es para darle el descuento sorpresa"
        );
      switch (sorpresa) {
        case "1":
        case "2":
        case "3":
          alert("ahora solo pagas $600000");
          break;
        case "4":
        case "5":
        case "6":
          alert("Ahora solo pagas $650000");
          break;
        case "7":
        case "8":
        case "9":
          alert("Ahora solo pagas $690000");
        case "10":
          alert("Le costara $685000");
          break;
        default:
          alert("Por favor elija un numero entero entre 10 y 1");
          break;
      }
    }

    //   2 else
    else if (budget >= 700000 && budget < 799999) {
      alert(`Excelente ${nombre} tenemos esta opcion para ti: ${presupuesto2}`);
      confirm = prompt(
        "Se que asi no son las ventas, solo pruebo mi software, pero, le gustaria comprar?, ahora tenemos una promocion si dice ahora mismo que si:), el precio normal $1000000, pero hoy si usted me dice le podemos dar un descuento sorpresa, como ve?, le gustaria comprar?"
      );
      if (confirm.toUpperCase != "NO") {
        sorpresa = prompt(
          "Eliga un numero entero del 1 al 10, es para darle el descuento sorpresa"
        );
        while (!condiciones.includes(sorpresa))
          sorpresa = prompt(
            "Eliga un numero entero del 1 al 10, es para darle el descuento sorpresa"
          );
        switch (sorpresa) {
          case "1":
          case "2":
          case "3":
            alert("ahora solo pagas $800000");
            break;
          case "4":
          case "5":
          case "6":
            alert("Ahora solo pagas $850000");
            break;
          case "7":
          case "8":
          case "9":
            alert("Ahora solo pagas $890000");
          case "10":
            alert("Le costara $885000");
            break;
          default:
            alert("elija un numero entre 1 y 10para darle su descuento");
            break;
        }
      }

      //   tercer else
      else if (budget >= 300000 && budget < 699999) {
        alert(
          `Perfecto ${nombre} Este es el modelo perfecto para su presupuestp: ${presupuesto1}`
        );
        let confirm = prompt(
          "Se que asi no son las ventas, solo pruebo mi software, pero, le gustaria comprar?, ahora tenemos una promocion si dice ahora mismo que si:), el precio normal $1000000, pero hoy si usted me dice le podemos dar un descuento sorpresa, como ve?, le gustaria comprar?"
        );
        if (confirm.toUpperCase !== "NO") {
          let sorpresa = prompt(
            "Eliga un numero entero del 1 al 10, es para darle el descuento sorpresa"
          );
          while (!condiciones.includes(sorpresa))
            sorpresa = prompt(
              "Eliga un numero entero del 1 al 10, es para darle el descuento sorpresa"
            );
          switch (sorpresa) {
            case "1":
            case "2":
            case "3":
              alert("ahora solo pagas $400000");
              break;
            case "4":
            case "5":
            case "6":
              alert("Ahora solo pagas $550000");
              break;
            case "7":
            case "8":
            case "9":
              alert("Ahora solo pagas $590000");
            case "10":
              alert("Le costara $585000");
              break;
            default:
              alert("elija un numero entre el 1 y el 10");
              break;
          }
        }
      } else {
        alert("Lo siento, por el momento no te puedo atender");
      }
    }
  }
}

valorarBudget();
