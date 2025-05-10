import { gsap } from 'gsap';

import { ScrambleTextPlugin } from 'gsap/ScrambleTextPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(ScrambleTextPlugin, ScrollTrigger, SplitText);

export function scrambleTitle() {
  gsap.registerEffect({
    name: 'scrambleSplit',
    plugins: 'scrambleText',
    defaults: { scrambleText: '{original}' },
    extendTimeline: true,
    effect(splits, vars) {
      let tl = gsap.timeline();
      splits.forEach((split) => {
        let proxy = document.createElement('div'),
          chars = split.chars,
          l = chars.length;
        proxy.innerText = chars.map((e) => e.innerText).join('');
        tl.add(
          gsap.to(proxy, vars).eventCallback('onUpdate', () => {
            let i = l;
            while (i--) {
              chars[i].innerText = proxy.innerText.charAt(i);
            }
          }),
          0
        );
      });
      return tl;
    },
  });

  let split = SplitText.create('.split', { type: 'chars' });
  gsap.set('.split', { opacity: 1, delay: 0.4 });
  gsap.effects.scrambleSplit(split, { duration: 4, delay: 0.4 });
  gsap.from(split.chars, {
    duration: 0.5,
    y: 'random(-100, 100)',
    x: 'random(-50, 50)',
    stagger: 0.05,
  });
}

/* gsap.registerEffect({
	name: "scrambleSplit",
	plugins:"scrambleText",
	defaults: {scrambleText: "{original}"},
	extendTimeline: true,
	effect(splits, vars) {
		let tl = gsap.timeline();
		splits.forEach(split => {
			let proxy = document.createElement("div"),
				chars = split.chars,
				l = chars.length;
			proxy.innerText = split.chars.map(e => e.innerText).join("");
			tl.add(gsap.to(proxy, vars).eventCallback("onUpdate", () => {
					let i = l;
					while (i--) {
						chars[i].innerText = proxy.innerText.charAt(i);
					}
				}), 0);
		});
		return tl;
	}
}); */

/* document.addEventListener("DOMContentLoaded", () => {
  const title = document.querySelector(".hero_title.scramble");
  if (title) {
    gsap.fromTo(
      title,
      { scrambleText: { text: "##########", chars: "█▓▒░<>/|", revealDelay: 0.5 } },
      {
        duration: 2,
        scrambleText: {
          text: "Bonjour, je suis Tom Bajoux",
          chars: "█▓▒░<>/|",
          revealDelay: 0.5,
        },
        ease: "power2.out",
      }
    );
  }
}); */
