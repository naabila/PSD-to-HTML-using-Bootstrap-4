$(document).ready(function(){
    //Wow js
    new WOW().init();
    //mixitup plugin
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
});



$('.top').click(function(){
    $('html,body').animate({
        scrollTop:0
    },1000)
});
$('.top').hide();

$(window).scroll(function(){
    var ourWindow= $(this).scrollTop();
    if(ourWindow<700){
        $('.top').fadeOut();

    }else{
        $('.top').fadeIn();
    }
});

//Sticky nav
$(window).scroll(function(){
    var ourWindow= $(this).scrollTop();
    if(ourWindow>100){
        $('.menu-area').addClass('sticky');

    }else{
        $('.menu-area').removeClass('sticky');
    }
});

//go to the section

$('.navbar-nav a[href^="#"]').click(function(e){
    e.preventDefault();

    var target = this.hash;

    $('html, body').animate({
        scrollTop: $(target).offset().top - 50
    }, 500);


});




});