// ===== Footer: current year and last modified date =====
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("last-modified").textContent = document.lastModified;

// ===== Wind Chill Calculation =====

// Static values matching the displayed weather content
const temperature = 8;   // °C
const windSpeed = 15;    // km/h

// Calculates wind chill using the metric formula (returns result in one line)
function calculateWindChill(tempC, windKmh) {
  return (13.12 + 0.6215 * tempC - 11.37 * Math.pow(windKmh, 0.16) + 0.3965 * tempC * Math.pow(windKmh, 0.16)).toFixed(1);
}

// Only call calculateWindChill if the viable conditions are met
const windChillElement = document.getElementById("wind-chill");

if (temperature <= 10 && windSpeed > 4.8) {
  windChillElement.textContent = `${calculateWindChill(temperature, windSpeed)} °C`;
} else {
  windChillElement.textContent = "N/A";
}