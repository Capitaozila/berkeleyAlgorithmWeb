import { gsap } from "gsap";

document.addEventListener("DOMContentLoaded", () => {
  const themeToggleButton = document.getElementById("theme-toggle");

  if (themeToggleButton) {
    themeToggleButton.addEventListener("click", () => {
      const body = document.body;
      const icon = themeToggleButton.querySelector("i");
      const isDarkMode = body.classList.contains("dark");

      if (isDarkMode) {
        body.classList.remove("dark");
        body.classList.add("light");
      } else {
        body.classList.remove("light");
        body.classList.add("dark");
      }

      gsap.set(icon, { rotation: 0 });

      gsap.to(icon, {
        rotation: 360,
        duration: 0.5,
        onComplete: () => {
          icon.className = isDarkMode ? "fas fa-moon" : "fas fa-sun";
          gsap.fromTo(icon, { rotation: 360 }, { rotation: 0, duration: 0.5 });
        },
      });
    });
  }
});
