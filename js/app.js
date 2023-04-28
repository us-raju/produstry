$(function(){
 $('#button').on('click', function(){
    $('#sidebar').addClass('active');
 })
 $('#close').on('click', function(){
    $('#sidebar').removeClass('active');
 })
  
 $('.banner_slider').slick({
   prevArrow:'<button class="banner_slider_arrow"><span><i class="fa-solid fa-chevron-left"></i></span></button> ',
   nextArrow:'<button class="banner_slider_arrow"><span><i class="fa-solid fa-chevron-right"></i></span></button> ',
   // fade:true,
 })
    
      
})

var typed = new Typed('#typed', {
   strings: [
      "Welcome to PRODUSTRY",
   ],
   typeSpeed: 50,
   loop: true,
   backSpeed: 50,
 });
var typed = new Typed('#os_heading', {
   strings: [
      "Our Services",
   ],
   typeSpeed: 50,
   loop: true,
   backSpeed: 50,
 });
var typed = new Typed('#portfolio_heading', {
   strings: [
      "Our Portfolio",
   ],
   typeSpeed: 50,
   loop: true,
   backSpeed: 50,
 });