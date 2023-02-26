// Coverflow Video Carousel Effects
let swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
        rotate: 50,
        parallax: true,
        stretch: 10,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
    // change slides using keboard arrow keys!
    keyboard: {
        enabled: true,
        onlyInViewport: false
      },
});
// Hamburger Menu Collapse event trigger
let hamburgerMenu = document.querySelector(".hamburger")
let ulLi = document.querySelector(".unordered-list")

hamburgerMenu.addEventListener ('click', () => {
    hamburgerMenu.classList.toggle("change")
    ulLi.classList.toggle("nav-change")
})