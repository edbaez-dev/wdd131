const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/aba-nigeria-temple/aba-nigeria-temple-5087-main.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/manti-utah-temple/manti-utah-temple-40551-main.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/payson-utah-temple/payson-utah-temple-62834-main.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/yigo-guam-temple/yigo-guam-temple-26495-main.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/washington-d.c.-temple/washington-d.c.-temple-14992-main.jpg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/lima-peru-temple/lima-peru-temple-12721-main.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/mexico-city-mexico-temple/mexico-city-mexico-temple-4060-main.jpg"
  },
  {
    templeName: "Asunción Paraguay",
    location: "Asunción, Paraguay",
    dedicated: "2002, May, 19",
    area: 11906,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/asuncion-paraguay-temple/asuncion-paraguay-temple-6969-main.jpg"
  },
  {
    templeName: "Madrid Spain",
    location: "Madrid, Spain",
    dedicated: "1999, March, 19 - 21",
    area: 45800,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/_temp/056-Madrid-Spain-Temple.jpg"
  },
  {
    templeName: "Santiago Chile",
    location: "Santiago, Chile",
    dedicated: "1983, September, 15 - 17",
    area: 20831,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/_temp/024-Santiago-Chile-Temple.jpg"
  }
];

// Container where temple cards will be rendered
const templeCardsContainer = document.getElementById('temple-cards');

// Renders temple cards into the DOM for a given array of temples
function displayTemples(templeArray) {
  templeCardsContainer.innerHTML = '';

  templeArray.forEach((temple) => {
    const card = document.createElement('figure');

    card.innerHTML = `
      <h2>${temple.templeName}</h2>
      <p>Location: ${temple.location}</p>
      <p>Dedicated: ${temple.dedicated}</p>
      <p>Size: ${temple.area.toLocaleString()} sq ft</p>
      <img src="${temple.imageUrl}" alt="${temple.templeName} Temple" loading="lazy">
    `;

    templeCardsContainer.appendChild(card);
  });
}

// Show all temples by default when the page loads
displayTemples(temples);

// Filter: Old — temples built before 1900
document.getElementById('old').addEventListener('click', (event) => {
  event.preventDefault();
  const oldTemples = temples.filter((temple) => {
    const year = parseInt(temple.dedicated.split(',')[0]);
    return year < 1900;
  });
  displayTemples(oldTemples);
});

// Filter: New — temples built after 2000
document.getElementById('new').addEventListener('click', (event) => {
  event.preventDefault();
  const newTemples = temples.filter((temple) => {
    const year = parseInt(temple.dedicated.split(',')[0]);
    return year > 2000;
  });
  displayTemples(newTemples);
});

// Filter: Large — temples larger than 90,000 sq ft
document.getElementById('large').addEventListener('click', (event) => {
  event.preventDefault();
  const largeTemples = temples.filter((temple) => temple.area > 90000);
  displayTemples(largeTemples);
});

// Filter: Small — temples smaller than 10,000 sq ft
document.getElementById('small').addEventListener('click', (event) => {
  event.preventDefault();
  const smallTemples = temples.filter((temple) => temple.area < 10000);
  displayTemples(smallTemples);
});

// Filter: Home — show all temples
document.getElementById('home').addEventListener('click', (event) => {
  event.preventDefault();
  displayTemples(temples);
});

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