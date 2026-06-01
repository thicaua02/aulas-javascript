'use strict';

const opcoes = {
    type: 'loop',
    autoplay: true,
    interval: 5000,
    pagination: false,

    perPage: 3,
    gap: '1rem',
    breackpoints: {
        800: { perPage: 2},
        600: { perPage: 1}
    }
}

const slider = new Splide('.splide', opcoes);
slider.mount();