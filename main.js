var menuToggle = document.getElementById("menu-toggle");
var menu = document.getElementById("menu-open");

menuToggle.addEventListener("click", function() {
    menu.classList.toggle("show");
    console.log('teste')
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
        // autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        nav: true,
        navText: ["Anterior", "Próximo"],
        responsive: {
            0:{
                items: 1
            },
            650: {
                items: 2
            }, 
            940: {
                items: 3
            }
        }
    });
});
