
// LOADING
var loader = document.getElementsByClassName('loading');
var content = document.getElementsByClassName("page-content");

loader[0].style.display = 'flex';

var timer = setTimeout(function() {
  loader[0].style.display = 'none';
}, 2300);

content[0].addEventListener('load', function() {
  clearTimeout(timer);
  loader[0].style.display = 'none';
});



// MENU
var menuToggle = document.getElementById("menu-toggle");
var menu = document.getElementById("menu-open");

menuToggle.addEventListener("click", function() {
    menu.classList.toggle("show");
});

var openDropdownSubmenu = document.getElementById("open-dropdown-mobile");
var dropdownSubmenu = document.getElementById("dropdown-mobile");

openDropdownSubmenu.addEventListener("click", function() {
    dropdownSubmenu.classList.toggle("submenumobileshow");
});


// Carrossel
$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items: 3,
        loop: true,
        margin: 20,
        dots: false,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        nav: true,
        navText: ["Anterior", "Próximo"],
        responsive: {
            0:{
                items: 1
            },
            800: {
                items: 2
            }, 
            1250: {
                items: 3
            }
        }
    });
});
