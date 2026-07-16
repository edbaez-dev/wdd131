// Dynamic footer: copyright year and last modified date
document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('last-modified').textContent = `Last Modification: ${document.lastModified}`;

// Hamburger menu toggle
const menuButton = document.getElementById('menu-button');
const primaryNav = document.getElementById('primary-nav');

menuButton.addEventListener('click', () => {
  primaryNav.classList.toggle('open');

  if (primaryNav.classList.contains('open')) {
    menuButton.innerHTML = '&times;'; // X symbol
  } else {
    menuButton.innerHTML = '&#9776;'; // hamburger symbol
  }
});