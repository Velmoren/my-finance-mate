import Splide from '@splidejs/splide';

export const marqueeModule = () => {
  const marquee = document.querySelector('.marquee-splide')

  if (marquee) {
    new Splide('.marquee-splide', {
      type: 'loop',
      // drag: 'free',
      rewind: true,
      focus: 'start',
      autoWidth: true,
      gap: 20,
      autoplay: true,
      interval: 3000,
      speed: 800,
      pagination: false,
      // autoScroll: {
      //   speed: 2,
      // },
    }).mount();
  }
}