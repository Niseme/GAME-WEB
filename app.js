const wom = document.querySelector('.woman');

const tl = new TimelineMax();

tl.fromTo(wom, 1.2, { height: "0%" }, { height: "80%", ease: Power2.easeInOut })
    .fromTo(wom, 1.2, { width: "100%" }, { width: "100%", ease: Power2.easeInOut });

