import { scrambleTitle } from './animations.js';

const loader = document.getElementById('loader');
const header = document.querySelector('.header');
const main = document.querySelector('.main');

/* Scroll */
window.addEventListener('scroll', () => {
  console.log(window.scrollY);
});

/* Loader */
/* window.addEventListener('DOMContentLoaded', () => {
  if (header) header.classList.add('hidden');
  if (main) main.classList.add('hidden');

  // Simuler la durée de l'animation du loader (2.5s ici)
  setTimeout(() => {
    if (loader) {
      loader.classList.add('fade-out');
      setTimeout(() => {
        loader.style.display = 'none';
        //if (header) header.classList.remove('hidden');
        if (main) main.classList.remove('hidden');
        scrambleTitle();
      }, 500); // correspond à la transition CSS du loader
    }
  }, 2500);
}); */

window.addEventListener('scroll', () => {
  if (window.scrollY === 0) {
    header.classList.add('hidden');
    console.log('hidden');
  } else {
    header.classList.remove('hidden');
    console.log('visible');
  }
});
