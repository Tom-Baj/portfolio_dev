// ==========================
// Sélection des éléments du DOM


// ==========================
const header = document.querySelector('.header');

// ==========================
// Gestion du scroll (console)
// ==========================
/* window.addEventListener('scroll', () => {
  console.log(window.scrollY);
}); */


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

