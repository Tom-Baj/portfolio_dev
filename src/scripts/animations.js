// ==========================
// Importations et plugins GSAP
// ==========================
import { gsap } from 'gsap';

function animateHighlight() {
    gsap.to(".highlight", {
        y: -500,
        color: 'red',
    });
}

export default animateHighlight;