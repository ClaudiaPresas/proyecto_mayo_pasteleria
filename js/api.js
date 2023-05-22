const mezclar_postres = (array) => {
  return array.sort(() => Math.random() - 0.5);
};

async function obtener_postres() {
  const cards_container = document.querySelector(".cards-container");

  let postres = [];
  const descripciones = [
    "Descubre postres irresistibles, desde pasteles hasta helados, para satisfacer tus antojos.",
    "Sumérgete en un mundo chocolatoso con brownies, tortas y más delicias para los amantes del chocolate.",
    "Saborea postres frutales con tartas, pasteles y dulces repletos de frescura y sabor.",
    "Experimenta lo celestial con nuestros postres gourmet de alta calidad y técnicas culinarias excepcionales.",
  ];
  try {
    const respuesta = await fetch(
      "https://www.themealdb.com/api/json/v1/1/filter.php?c=Dessert"
    );

    if (respuesta.ok) {
      const informacion = await respuesta.json();
      postres = mezclar_postres(informacion.meals);
    }
  } catch (error) {
    console.log("Ha ocurrido un error:" + error);
  }

  for (let i = 0; i < 4; i++) {
    cards_container.innerHTML += `
      <article class="card-container">
        <h3>${postres[i].strMeal}</h3>
  
        <span class="card-imagen-container">    
              <img
                class="card-imagen"
                src="${postres[i].strMealThumb}"
                alt="${postres[i].strMeal}"
              />
        </span>

        <span class="card-item-container">
            <p>${descripciones[i]}</p>
            <a class="boton-card" href="./productos.html">y mas</a>
        </span>
      </article>
  `;
  }
}

obtener_postres();
