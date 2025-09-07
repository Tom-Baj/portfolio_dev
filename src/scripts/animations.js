// ==========================
// Importations et plugins GSAP
// ==========================
import { gsap } from 'gsap';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(SplitText);

// ==========================
// About Section
// ==========================

let split = SplitText.create(".about__text--split", { type: "words, chars" });

gsap.from(split.chars, {
  duration: 1, 
  y: 10,
  autoAlpha: -1,
  stagger: 0.02
});