const buttonContainer= document.querySelector('.filter-image-container');
var mixer = mixitup(buttonContainer, {
    selectors: {
        control: '[data-ref="mix"]'
    }
});
// var mixer = mixitup(buttonContainer);

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay:true,
    autoplayTimeout:3000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

//Sctoll to top
$('.top').click(function(){
    $('html,body').animate({
        scrollTop:0
    },1000)
})
