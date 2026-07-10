// Display the current year in the footer
const currentYear = document.getElementById("currentyear");
currentYear.innerHTML = new Date().getFullYear();

// Display the last modified date of the document in the footer
const lastModified = document.getElementById("lastModified");
lastModified.innerHTML = `Last Modification: ${document.lastModified}`;