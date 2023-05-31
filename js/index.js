let navbar = document.querySelector('.header .navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.add('active');
}

document.querySelector('#nav-close').onclick = () =>{
    navbar.classList.remove('active');
}

let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.add('active');
}

document.querySelector('#close-search').onclick = () =>{
    searchForm.classList.remove('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');

    if(window.screenY > 0){
        document.querySelector('.navbar').classList.add('active');
    }else{
        document.querySelector('.navbar').classList.remove('active');
    }
    
};

window.onload = () =>{

    if(window.screenY > 0){
        document.querySelector('.header').classList.add('active');
    }else{
        document.querySelector('.header').classList.remove('active');
    }
    
};

var swiper = new Swiper(".home-slider", {
    loop:true,
    grabCursor:true,
    // autoplay:{
        // delay:3000,
        // disableOnInteraction:false,
    // },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  var newSwiper = new Swiper(".dest-slider", {
    spaceBetween: 20,
    loop:true,
    grabCursor:true,
    breakpoints:{
        640:{
            slidesPerView: 1,
        },
        768:{
            slidesPerView: 2,
        },
        1024:{
            slidesPerView: 3,
        },
    },
  });

  var newSwiper = new Swiper(".reviews-slider", {
    spaceBetween: 20,
    loop:true,
    grabCursor:true,
    breakpoints:{
        640:{
            slidesPerView: 1,
        },
        768:{
            slidesPerView: 2,
        },
        1024:{
            slidesPerView: 3,
        },
    },
  });

  var swiper = new Swiper(".trip_swiper", {
    grabCursor:true,
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });