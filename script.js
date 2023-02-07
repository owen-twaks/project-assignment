window.onload = function(){
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("sw.js").then(registration => {
      console.log("SW Registered!");
      console.log(registration);
    }).catch(error => {
      console.log("SW Registration Failed!");
      console.log(error);
    })
  }


  let navbar = document.querySelector('.navbar');
  let fabars = document.querySelector('.fa-bars');
  
  fabars.onclick = () =>{
      navbar.classList.toggle("active")
  };
  
  var swiper = new Swiper(".home-slid", {
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
  });
  
  var swiper = new Swiper(".team-slider", {
      loop: true,
      slidesPerView: 1,
      spaceBetween: 10,
      breakpoints: {
        "0": {
          slidesPerView: 1,
          autoplay:{
              delay:700,
              disableOnInteraction:false,
          },
        },
        "768": {
          slidesPerView: 2,
            
        },
        "1020": {
          slidesPerView: 3,
            
        },
      },
    });
    
};

  