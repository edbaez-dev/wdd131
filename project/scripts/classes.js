const classes = [
  { name: "Yoga", day: "Monday", time: "7:00 AM", instructor: "Raquel Roman", spots: "Available" },
  { name: "Spinning", day: "Monday", time: "6:00 PM", instructor: "Ronald Melgarejo", spots: "Available" },
  { name: "CrossFit Bootcamp", day: "Tuesday", time: "6:00 AM", instructor: "Kevin Meza", spots: "Full" },
  { name: "Zumba", day: "Wednesday", time: "7:00 PM", instructor: "Micaela Baez", spots: "Available" },
  { name: "MMA (Mixed Martial Arts)", day: "Thursday", time: "8:00 AM", instructor: "Wilson Gimenez", spots: "Available" },
  { name: "HIIT Circuit", day: "Friday", time: "6:00 PM", instructor: "Bianca Baez", spots: "Full" },
  { name: "Strength Training", day: "Saturday", time: "9:00 AM", instructor: "Francisco Baez", spots: "Available" }
];

const scheduleBody = document.querySelector("#schedule tbody");

// Renders a given array of class objects as table rows
function renderClasses(classArray) {
  const rows = classArray.map((classItem) => {
    const statusClass = classItem.spots === "Full" ? "status-full" : "status-available";

    return `<tr>
      <td>${classItem.day}</td>
      <td>${classItem.time}</td>
      <td>${classItem.name}</td>
      <td>${classItem.instructor}</td>
      <td class="${statusClass}">${classItem.spots}</td>
    </tr>`;
  });

  scheduleBody.innerHTML = rows.join("");
}

// Filters the classes array by day, or returns all classes if "all" is selected
function filterClassesByDay(day) {
  if (day === "all") {
    return classes;
  }
  return classes.filter((classItem) => classItem.day === day);
}

// Sets up click listeners on the day filter buttons
function setupDayFilters() {
  const filterButtons = document.querySelectorAll(".filter-btn");

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");

      const selectedDay = button.dataset.day;
      const filteredClasses = filterClassesByDay(selectedDay);
      renderClasses(filteredClasses);
    });
  });
}

renderClasses(classes);
setupDayFilters();