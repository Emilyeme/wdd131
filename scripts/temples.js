// Toggle hamburger menu
document.getElementById("menu-button").addEventListener("click", () => {
    document.getElementById("nav-menu").classList.toggle("open");
    const button = document.getElementById("menu-button");
    button.textContent = button.textContent === "☰" ? "✖" : "☰";
});

// Dynamic footer year
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;
