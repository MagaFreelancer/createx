$(function () {
  
    const bodyStyles = window.getComputedStyle(document.body);
    const gap = parseInt(bodyStyles.getPropertyValue('--grid-gap')); //get
    const portfolioSlider = new Swiper('.portfolio-section__items', {
        slidesPerView: 3,
        spaceBetween: gap,
        loop: true,
        navigation: {
            nextEl: '.portfolio-section__next',
            prevEl: '.portfolio-section__prev',
        },
    });
})