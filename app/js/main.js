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
    const relatedSlider = new Swiper('.related-projects__items', {
        slidesPerView: 3,
        spaceBetween: gap,
        loop: true,
        navigation: {
            nextEl: '.related-projects__next',
            prevEl: '.related-projects__prev',
        },
    });

    const testimonialsSlider = new Swiper('.testimonials__items', {
        slidesPerView: 1,
        loop: true,
        navigation: {
            nextEl: '.testimonials__next',
            prevEl: '.testimonials__prev',
        },
    });


    // const circleOne = document.querySelector('.facts-element__circle--one-color .progress');
    // const circleTwo = document.querySelector('.facts-element__circle--two-color .progress');
    // const circleThree = document.querySelector('.facts-element__circle--three-color .progress');
    // const circleFour = document.querySelector('.facts-element__circle--four-color .progress');

    // const progressAnimation = (circleItem, circlePrecent) => {
    //     let percentageProgress = circlePrecent;

    //     let radius = circleItem.getAttribute('r');
    //     let circleLength = 2 * Math.PI * radius;

    //     circleItem.setAttribute('stroke-dasharray', circleLength);
    //     circleItem.setAttribute('stroke-dashoffset', circleLength - circleLength * percentageProgress / 100);
    // }
    // progressAnimation(circleTwo, 70);
    // progressAnimation(circleOne, 80);
    // progressAnimation(circleThree, 40);
    // progressAnimation(circleFour, 56);
    const circles = document.querySelectorAll(".facts-element__circle");

    circles.forEach(el => {


        if (el.dataset.percentage) {
            let progress = el.querySelector('.progress');
            let valueBlock = el.querySelector('.facts-element__value');
            let radius = progress.getAttribute('r');
            let circleLength = 2 * Math.PI * radius;
            let full = el.dataset.full;
            let value = el.dataset.value;
            let perecentageProgress = Math.floor(value / full * 100);
            valueBlock.textContent = value
            progress.setAttribute('stroke-dasharray', circleLength);
            progress.setAttribute('stroke-dashoffset', circleLength - circleLength * perecentageProgress / 100);
        } else {
            let progress = el.querySelector('.progress');
            let value = el.querySelector('.facts-element__value');
            let radius = progress.getAttribute('r');
            let circleLength = 2 * Math.PI * radius;
            let percent = el.dataset.percent;
            let perecentageProgress = Math.floor(percent);
            value.textContent = percent + '%'
            progress.setAttribute('stroke-dasharray', circleLength);
            progress.setAttribute('stroke-dashoffset', circleLength - circleLength * perecentageProgress / 100);
        }
    })
})