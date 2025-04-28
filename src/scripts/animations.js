import baffle from "baffle";

/* Loader */
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  if (loader) {
    loader.style.opacity = "0";
    setTimeout(() => {
      loader.style.display = "none";

      const title = document.querySelector(".hero_title");
      const subtitle = document.querySelector(".hero__subtitle");
      const cta = document.querySelector(".hero__cta");

      if (title) title.classList.add("fade-in-up");
      if (subtitle) subtitle.classList.add("fade-in-up");
      if (cta) cta.classList.add("fade-in-up");
    }, 500); // attendre la transition
  }
});

/* Scramble */
document.addEventListener("DOMContentLoaded", () => {
  const text = document.querySelector(".scramble");

  if (text) {
    const effect = baffle(text);
    effect.set({
      characters: "█▓▒░▒▓█ ░<>/|",
      speed: 70,
    });
    effect.start();
    effect.reveal(5000);
  }
});
