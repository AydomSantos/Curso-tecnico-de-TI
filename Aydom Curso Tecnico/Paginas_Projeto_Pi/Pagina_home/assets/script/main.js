// Configuração do Swiper principal (com navegação)
// Este Swiper é usado para navegar entre os slides com os botões de navegação
var swiper = new Swiper(".mySwiper", {
  navigation: {
    // Botões de navegação
    nextEl: ".swiper-button-next",  
    prevEl: ".swiper-button-prev",  
  },
  pagination: {
    // Configuração da paginação para o swiper principal
    el: ".swiper-pagination-main",  
    clickable: true, 
  },
});

// Configuração do Swiper para as últimas buscas (com visualização de 5 slides)
var swiperUltimasBuscas = new Swiper(".section__ultimas__buscas--swiper", {
  slidesPerView: 5,  
  spaceBetween: 3,  
  freeMode: true,  
  pagination: {
    el: ".swiper-pagination",  
    clickable: true,  
  },
});

// Configuração do Swiper para "Mais Procurados em Carros" (com visualização de 5 slides)
var swiperCarros = new Swiper(".section__mais__procurados__em__carros--swiper", {
  slidesPerView: 5,  
  spaceBetween: 3,  
  freeMode: true,  
  pagination: {
    el: ".swiper-pagination",  
    clickable: true,  
  },
});

// Configuração do Swiper para "Selecionamos para você"

var swiperSelecionados = new Swiper(".section__selecionamos__para__voce--swiper", {
  slidesPerView: 3,  
  spaceBetween: 3,  
  freeMode: true,  
  pagination: {
    el: ".swiper-pagination",  
    clickable: true,  
  },
})

var swiperAnuciopago = new Swiper(".section__anuncio__patrocinado--swiper ", {
  slidesPerView: 2,  
  spaceBetween: 3,  
  freeMode: true,  
  pagination: {
    el: ".swiper-pagination",  
    clickable: true,  
  },
})