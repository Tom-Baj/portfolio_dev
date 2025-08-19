// ==========================
// Sélection des éléments du DOM
// ==========================
const header = document.querySelector('.header');
const main = document.querySelector('.main');

// ==========================
// Gestion du scroll (console)
// ==========================
window.addEventListener('scroll', () => {
  console.log(window.scrollY);
});

// ==========================
// Parallax pour le quadrillage
// ==========================
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  document.documentElement.style.setProperty('--scroll-y', scrollY);
});


// ==========================
// Affichage/Masquage du header au scroll
// ==========================
window.addEventListener('scroll', () => {
  if (window.scrollY === 0) {
    header.classList.add('hidden');
    console.log('hidden');
  } else {
    header.classList.remove('hidden');
    console.log('visible');
  }
});
