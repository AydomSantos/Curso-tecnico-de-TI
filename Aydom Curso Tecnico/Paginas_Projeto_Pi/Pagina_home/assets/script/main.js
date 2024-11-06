// Configuração do Swiper principal (com navegação)
var swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination-main",  // Seletor exclusivo para o swiper principal
    clickable: true,
  },
});


// Configuração do Swiper das últimas buscas (com visualização de 3 slides)
var swiperUltimasBuscas = new Swiper(".section__ultimas__buscas--swiper", {
  slidesPerView: 5,
  spaceBetween: 2,
  freeMode: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
