const wom = document.querySelector('.woman');
const tit = document.querySelector('.title1')
const hlogo = document.querySelector('.header-logo')
const ha = document.querySelectorAll('.header-a')
const bup = document.querySelectorAll('.border-up')
const soca = document.querySelectorAll('.socials-a')
const ltext = document.querySelector('.line-text')
const vline = document.querySelector('.v-line')
const bgred = document.querySelector('.bg-red')
const titlep = document.querySelector('.title-p')
const axis = document.querySelector('.axis')
const awards = document.querySelector('.awards')
const lsideh1 = document.querySelector('.left-side-h1')
const cornerimg = document.querySelector('.corner-picture')

const tl = new TimelineMax();

tl.fromTo(wom, 1.2, { height: "0%" }, { height: "80%", ease: Power2.easeInOut })
    .fromTo(wom, 1.2, { width: "100%" }, { width: "100%", ease: Power2.easeInOut },)
    .fromTo(tit, 1.2, { x: "-80%" }, { x: "0" }, "-=1.8")
    .fromTo(hlogo, 1.2, { opacity: 0.1 }, { opacity: 1, x: 0, ease: Power2.easeInOut }, "-=1.7")
    .fromTo(ha, 1.2, { opacity: 0.1, x: "-80%" }, { opacity: 1, x: 0, ease: Power2.easeInOut }, "-=1.7")
    .fromTo(bup, 1.2, { x: "180%" }, { opacity: 1, x: 0, ease: Power2.easeInOut }, "-=1.7")
    .fromTo(soca, 1.2, { x: "1000%", y: "-1000%" }, { opacity: 1, x: 0, y: 0, ease: Power2.easeInOut }, "-=1.2")
    .fromTo(ltext, 1.2, { x: "0", y: "-1000%" }, { opacity: 1, x: 0, y: 0, ease: Power2.easeInOut }, "-=1.2")
    .fromTo(titlep, 1.2, { x: "0", y: "-1000%" }, { opacity: 1, x: 0, y: 0, ease: Power2.easeInOut }, "-=1.2")
    .fromTo(axis, 1.2, { opacity: 0, x: "-80%" }, { opacity: 1, x: 0, ease: Power2.easeInOut }, "-=1.7")
    .fromTo(awards, 1.2, { opacity: 0, x: "-80%" }, { opacity: 1, x: 0, ease: Power2.easeInOut }, "-=1.7")
    .fromTo(lsideh1, 1.2, { x: "1000%", y: "-1000%" }, { opacity: 1, x: 0, y: 0, ease: Power2.easeInOut }, "-=1.2")
    .fromTo(cornerimg, 1.2, { x: "1000%", y: "-1000%" }, { opacity: 1, x: 0, y: 0, ease: Power2.easeInOut }, "-=1.2")






