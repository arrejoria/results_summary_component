console.log("JS Loaded");

// Variables
const summaryList = document.querySelector(".summary__list");

// Eventos

// Funciones

fetch("data.json")
  .then((response) => {
    if (response.ok) {
      return response.json();
    }
    throw new Error("Error al obtener el archivo JSON.");
  })
  .then((data) => {
    // Aquí puedes utilizar los datos JSON
    const sumObj = data;
    for (let key in sumObj) {
      const sumItems = sumObj[key];

      createCatItem(sumItems);
    }
  })
  .catch((error) => {
    // Manejo de errores
    console.error(error);
  });

function createCatItem(sumItem) {
  const catColors = {
    lightred: "hsl(0, 100%, 67%)",
    orangeyyellow: "hsl(39, 100%, 56%)",
    greenteal: "hsl(166, 100%, 37%)",
    cobaltblue: "hsl(234, 85%, 45%)",
  };
  const {lightred, orangeyyellow, greenteal, cobaltblue} = colors
  const { category, score, icon, color } = sumItem;
  setCatColor(sumItem);
  console.log(sumItem);
  const sumLi = document.createElement("li");
  sumLi.innerHTML = `
      <div class="summary__item" data-list-value="" data-item-color="${color}">
        <figure class="summary__figure">
          <img src="${icon}" alt="Reaction Image" />${category}
        </figure>
        <p><span>${score}</span>/100</p>
      </div>
    `;

  summaryList.append(sumLi);
}

function setCatColor(category) {}
