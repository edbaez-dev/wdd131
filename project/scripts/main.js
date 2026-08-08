// Hamburger menu toggle
function setupMenuToggle() {
  const menuButton = document.getElementById('menu-button');
  const primaryNav = document.getElementById('primary-nav');

  menuButton.addEventListener('click', () => {
    primaryNav.classList.toggle('open');

    if (primaryNav.classList.contains('open')) {
      menuButton.innerHTML = '&times;';
    } else {
      menuButton.innerHTML = '&#9776;';
    }
  });
}

// Dynamic footer: copyright year and last modified date
function setupFooterInfo() {
  document.getElementById('year').textContent = new Date().getFullYear();
  document.getElementById('last-modified').textContent = `Last Modification: ${document.lastModified}`;
}

setupMenuToggle();
setupFooterInfo();