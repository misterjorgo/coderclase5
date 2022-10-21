fetch("https://pokeapi.co/api/v2/pokemon/ditto")
  .then((response) => response.json())
  .then((data) => {
    let mydiv = document.getElementById("div");
    mydiv.innerHTML = `<p>${data.name}</p>
    `;
  });
