// == Swipper ==
/* const swiper = new Swiper(".swiper", { */
/*   direction: "horizontal", */
/*   loop: true, */
/*  */
/*   pagination: { */
/*     el: ".swiper-pagination", */
/*   }, */
/*  */
/*   navigation: { */
/*     nextEl: `.swiper-button-next`, */
/*     prevEl: `.swiper-button-prev`, */
/*   }, */
/*  */
/*   scrollbar: { */
/*     el: `.swiper-scrollbar`, */
/*   }, */
/* }); */
/*  = new =*/
const swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
