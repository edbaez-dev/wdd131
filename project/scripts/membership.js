const plans = [
  {
    name: "Basic",
    price: "$29/month",
    benefits: ["Gym floor access", "Locker room"]
  },
  {
    name: "Standard",
    price: "$49/month",
    benefits: ["Everything in Basic", "Unlimited group classes"]
  },
  {
    name: "Premium",
    price: "$79/month",
    benefits: ["Everything in Standard", "2 personal training sessions/month", "Nutrition guidance"]
  }
];

const plansContainer = document.getElementById("plans");
const planSelect = document.getElementById("plan");
const signupForm = document.getElementById("signup-form");
const formConfirmation = document.getElementById("form-confirmation");
const welcomeBack = document.getElementById("welcome-back");

// Renders the membership plan cards
function renderPlans() {
  const cards = plans.map((plan) => {
    const benefitItems = plan.benefits.map((benefit) => `<li>${benefit}</li>`).join("");

    return `<article class="plan-card">
      <h3>${plan.name}</h3>
      <p class="plan-price">${plan.price}</p>
      <ul>${benefitItems}</ul>
      <button type="button" class="choose-plan-btn" data-plan="${plan.name}">Choose Plan</button>
    </article>`;
  });

  plansContainer.innerHTML = cards.join("");
}

// Sets up click listeners on each "Choose Plan" button
function setupPlanButtons() {
  const buttons = document.querySelectorAll(".choose-plan-btn");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const selectedPlan = button.dataset.plan;
      planSelect.value = selectedPlan;
      signupForm.scrollIntoView({ behavior: "smooth" });
    });
  });
}

// Handles form submission: validates, saves to localStorage, and shows confirmation
function setupFormSubmission() {
  signupForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const plan = planSelect.value;

    if (name === "" || email === "" || plan === "") {
      formConfirmation.textContent = "Please fill out all required fields.";
      return;
    }

    const signupData = { name, email, plan };
    localStorage.setItem("odysseySignup", JSON.stringify(signupData));

    formConfirmation.textContent = `Thank you, ${name}! Your interest in the ${plan} plan has been received. We will contact you at ${email}.`;
    signupForm.reset();
  });
}

// Checks localStorage for a returning visitor and displays a welcome message
function checkReturningVisitor() {
  const savedSignup = localStorage.getItem("odysseySignup");

  if (savedSignup) {
    const data = JSON.parse(savedSignup);
    welcomeBack.textContent = `Welcome back, ${data.name}! You previously showed interest in the ${data.plan} plan.`;
  }
}

renderPlans();
setupPlanButtons();
setupFormSubmission();
checkReturningVisitor();