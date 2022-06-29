const bgr = document.querySelector('.bg-red');
const wom = document.querySelector('.woman');


const tl = new TimelineMax();
// tl.fromTo(bgr, 0.01, { height: "0%" }, { height: "80%", ease: Power2.easeInOut })
//     .fromTo(bgr, 1.2, { width: "100%" }, { width: "80%", ease: Power2.easeInOut });



tl.fromTo(wom, 0.1, { height: "0%" }, { height: "80%", ease: Power2.easeInOut });
