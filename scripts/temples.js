
document.getElementById("menu-button").addEventListener("click", () => {
    document.getElementById("nav-menu").classList.toggle("open");
    const button = document.getElementById("menu-button");
    button.textContent = button.textContent === "☰" ? "✖" : "☰";
});


const temples = [
  { name: "Brasilia Brazil", image: "images/brasilia_brazil_temple_exterior.jpeg" },
  { name: "Winnipeg Manitoba", image: "images/winnipeg_manitoba_temple_exterior_overcast.jpeg" },
  { name: "Aba Nigeria", image: "images/aba_nigeria_temple_lds.jpeg" },
  { name: "London England", image: "images/london_england_temple_lds.jpeg" },
  { name: "Sao Paulo Brazil", image: "images/sao_paulo_brazil_temple_lds.jpeg" },
  { name: "Santiago Chile", image: "images/santiago_chile_lds_temple.jpeg" },
  { name: "Kenya Nairobi", image: "images/nairobi_kenya_temple_exterior.jpeg" },
  { name: "Anchorage Alaska", image: "images/anchorage_alaska_temple_lds.jpeg" },
  { name: "Accra Ghana", image: "images/accra_ghana_temple_lds.jpeg" },
  { name: "Adelaide Australia", image: "images/adelaide_australia_temple_lds.jpeg" }
];


function categorizeTemple(temple) {
  const name = temple.name.toLowerCase();

  if (name.includes("winnipeg") || name.includes("brasilia") || name.includes("adelaide")) {
    return "new";
  } else if (name.includes("london") || name.includes("aba") || name.includes("accra")) {
    return "old";
  } else if (name.includes("sao paulo") || name.includes("santiago")) {
    return "large";
  } else if (name.includes("kenya") || name.includes("anchorage")) {
    return "small";
  } else {
    return "uncategorized";
  }
}

const gridContainer = document.querySelector(".grid-container");
const navLinks = document.querySelectorAll("#nav-menu a");

function displayTemples(filter) {
  gridContainer.innerHTML = "";

  const filtered = filter === "all"
    ? temples
    : temples.filter(t => categorizeTemple(t) === filter);

  filtered.forEach(t => {
    const figure = document.createElement("figure");
    figure.innerHTML = `
      <img src="${t.image}" alt="${t.name}" />
      <figcaption>${t.name}</figcaption>
    `;
    gridContainer.appendChild(figure);
  });
}

navLinks.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const filter = link.textContent.toLowerCase();
    displayTemples(filter === "home" ? "all" : filter);
  });
});

// Initial display
displayTemples("all");


document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;


const menuButton = document.getElementById("menu-button");
const navMenu = document.getElementById("nav-menu");

menuButton.addEventListener("click", () => {
  navMenu.classList.toggle("open");
});
