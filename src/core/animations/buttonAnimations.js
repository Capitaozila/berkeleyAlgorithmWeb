import { gsap } from "gsap";

document.addEventListener("DOMContentLoaded", () => {
  const syncButton = document.getElementById("syncButton");
  const generateButton = document.getElementById("generateButton");
  const generateClientButton = document.getElementById("generateClientButton");
  const removeClientButton = document.getElementById("removeClientButton");

  const buttons = [
    syncButton,
    generateButton,
    generateClientButton,
    removeClientButton,
  ];
  buttons.forEach((button) => {
    if (button) {
      const icon = button.querySelector("i");

      button.addEventListener("mouseenter", () => {
        gsap.to(icon, { scale: 1.2, duration: 0.2 });
      });
      button.addEventListener("mouseleave", () => {
        gsap.to(icon, { scale: 1, duration: 0.2 });
      });

      if (button === syncButton) {
        button.addEventListener("click", () => {
          gsap.fromTo(icon, { rotation: 0 }, { rotation: 360, duration: 1 });
        });
      } else if (button === generateButton) {
        button.addEventListener("click", () => {
          gsap.fromTo(
            icon,
            { y: -10 },
            { y: 0, duration: 0.5, ease: "bounce.out" },
          );
        });
      } else if (button === generateClientButton) {
        button.addEventListener("click", () => {
          gsap.fromTo(
            icon,
            { x: -10 },
            { x: 0, duration: 0.5, ease: "elastic.out(1, 0.3)" },
          );
        });
      } else if (button === removeClientButton) {
        button.addEventListener("click", () => {
          gsap.fromTo(icon, { opacity: 0.5 }, { opacity: 1, duration: 0.5 });
        });
      }
    }
  });
});
