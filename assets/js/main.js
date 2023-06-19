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
    const sumObj = data;
    setDataColor(sumObj);

    for (let key in sumObj) {
      const sumItems = sumObj[key];
      createCatItem(sumItems);
    }
  })
  .catch((error) => {
    console.error(error);
  });

function createCatItem(sumItem) {
  const { category, score, icon, color } = sumItem;
  const sumLi = document.createElement("li");
  sumLi.innerHTML = `
      <div class="summary__item" data-list-value=""data-item-bg="${color[1][1]}" data-item-color="${color[1][0]}">
        <figure class="summary__figure">
          <img src="${icon}" alt="Reaction Image" />${category}
        </figure>
        <p><span>${score}</span> / 100</p>
      </div>
    `;

  summaryList.append(sumLi);
  setColor(color[1][0], color[1][1]);
}

function setDataColor(category) {
  let colorOpacity;
  const dataColors = {
    lightred: ["hsl(0, 100%, 67%", "hsl(0, 100%, 67%, 5%)"],
    orangeyyellow: ["hsl(39, 100%, 56%)", "hsl(39, 100%, 56%, 5%)"],
    greenteal: ["hsl(166, 100%, 37%)", "hsl(166, 100%, 37%, 5%)"],
    cobaltblue: ["hsl(234, 85%, 45%)", "hsl(234, 85%, 45%, 5%)"],
  };
  let index = 0;
  for (let key in category) {
    if (!category[key].hasOwnProperty("color")) {
      const colors = Object.entries(dataColors);
      category[key]["color"] = colors[index];
    }

    index++;
  }
}

function setColor(color, bgColor) {
  const summaryItem = document.querySelectorAll(".summary__item");
  summaryItem.forEach((el) => {
    const dataColor = el.getAttribute("data-item-color"),
      dataBg = el.getAttribute("data-item-bg");
    console.log(dataColor);
    if (color == dataColor || bgColor == dataBg) {
      el.style.borderColor = bgColor;
      el.style.backgroundColor = bgColor;
      el.children[0].style.color = color;
    }
  });
}
