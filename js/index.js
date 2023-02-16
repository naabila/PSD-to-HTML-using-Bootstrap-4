const buttonContainer= document.querySelector('.filter-image-container');
var mixer = mixitup(buttonContainer, {
    selectors: {
        control: '[data-ref="mix"]'
    }
});
// var mixer = mixitup(buttonContainer);

$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
    autoplay:true,
    autoplayTimeout:4000,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:5,
            nav:true,
            loop:false
        }
    }
    
    
   
    
    
    });
  });

