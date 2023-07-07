//SWIPER
let homeSwiper = new Swiper(".home-swiper", {
    spaceBetween: 30,
    loop: "true",
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
  let newSwiper = new Swiper(".new-swiper", {
    centeredSlides: true,
    slidesPerView: "auto",
    loop: "true",
    spaceBetween: 16,
  });