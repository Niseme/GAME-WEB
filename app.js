const bgr = document.querySelector('.bg-red');
const wom = document.querySelector('.woman');
const cornerPic = document.querySelector('.corner-picture');



const tl = new TimelineMax();
tl.fromTo(bgr, 0.1, { height: "0%" }, { height: "80%", ease: Power2.easeInOut })
    .fromTo(bgr, 0.1, { width: "100%" }, { width: "80%", ease: Power2.easeInOut });

tl.fromTo(wom, 1.2, { height: "0%" }, { height: "80%", ease: Power2.easeInOut })
    .fromTo(wom, 1.2, { width: "100%" }, { width: "100%", ease: Power2.easeInOut });
