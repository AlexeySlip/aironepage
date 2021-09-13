// modal

let btnSendMessage = document.querySelector("#btn-send")
let modal = document.querySelector(".modal")
let btnClose = document.querySelector(".btn-close")

btnSendMessage.addEventListener("click", openModal);

btnClose.addEventListener("click", closeModal);

function openModal() {
  modal.classList.remove("hide");
  modal.classList.add("show");
}

function closeModal() {
  modal.classList.remove("show");
  modal.classList.add("hide");
}
modal.addEventListener("click", function (e) {
  if (e.target === modal) {
    closeModal()
  }
})


// slider
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    "@0.00": {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    "@0.75": {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    "@1.00": {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  },
});

// mobile menu
let mobileMenu = document.querySelector(".nav-mobile-menu");
let mainMenu = document.querySelector(".navigation")

mobileMenu.addEventListener("click",function(){
  mobileMenu.classList.toggle("active-menu");
  if (mobileMenu.classList.contains("active-menu")) {
    mainMenu.classList.add("active-menu")
  } else{
    mainMenu.classList.remove("active-menu")
  }
}
)