// ===== Theme Toggle =====
const toggle = document.getElementById('theme-toggle');
const html = document.documentElement;

// Check saved preference
if (localStorage.getItem("theme")) {
  html.setAttribute("data-theme", localStorage.getItem("theme"));
  toggle.setAttribute("aria-pressed", localStorage.getItem("theme") === "dark");
} else {
  // Default: light theme
  html.setAttribute("data-theme", "light");
}

// Toggle on click
toggle.addEventListener("click", () => {
  const current = html.getAttribute("data-theme");
  const newTheme = current === "dark" ? "light" : "dark";
  html.setAttribute("data-theme", newTheme);
  toggle.setAttribute("aria-pressed", newTheme === "dark");

  // Save preference
  localStorage.setItem("theme", newTheme);
});
// ===== Page Transition Effect =====
document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;

  // Add fade-in on load
  body.classList.add("fade-in");

  // Intercept all link clicks
  document.querySelectorAll("a").forEach(link => {
    if (link.hostname === window.location.hostname) {
      link.addEventListener("click", (e) => {
        // Only apply on same-site navigation
        e.preventDefault();
        body.classList.remove("fade-in");
        body.classList.add("fade-out");

        setTimeout(() => {
          window.location = link.href;
        }, 500); // match CSS transition time
      });
    }
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const skills = document.querySelectorAll(".skill-bar-fill");

  skills.forEach(skill => {
    const percent = skill.getAttribute("data-percent");
    let count = 0;

    // Animate bar width
    setTimeout(() => {
      skill.style.width = percent + "%";
    }, 200);

    // Animate counter
    const counter = skill.querySelector(".count");
    const interval = setInterval(() => {
      if (count < percent) {
        count++;
        counter.textContent = count + "%";
      } else {
        clearInterval(interval);
      }
    }, 20);
  });
});