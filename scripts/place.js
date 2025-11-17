function calculateWindChill(tempC, windSpeedKmh) {
  return 13.12 + 0.6215 * tempC - 11.37 * Math.pow(windSpeedKmh, 0.16) + 0.3965 * tempC * Math.pow(windSpeedKmh, 0.16);
}

document.addEventListener("DOMContentLoaded", () => {
  // Footer year and modified date
  document.getElementById("year").textContent = new Date().getFullYear();
  document.getElementById("lastModified").textContent = document.lastModified;

  // Wind chill calculation
  const temp = parseFloat(document.getElementById("temp").textContent);
  const wind = parseFloat(document.getElementById("wind").textContent);
  const chillEl = document.getElementById("chill");

  if (temp <= 12 && wind > 4.8) {
    const chill = calculateWindChill(temp, wind);
    chillEl.textContent = `${chill.toFixed(1.0)} °C`;
  } else {
    chillEl.textContent = "N/A";
  }
});
