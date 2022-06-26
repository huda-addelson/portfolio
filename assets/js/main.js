
// let homeSwiper = new Swiper(".home-swiper", {
//     spaceBetween: 16,
//     centeredSlides: true,
//     slidesPerview: 'auto',
//     loop: 'true',
// });

// Skils Bar
// $(window).scroll(function(){
//     let hT = $("#skils").offset().top,
//     hH = $("$skils").outerHeight(),
//     wH = $(window).height(),
//     wS = $(this).scrollTop();
//     if(wS > (hT+hH-1.4*wH)){
//         JQuery(".skilbar").each(funtion(){
//             JQuery(this).find(".skils").animate({

//             })
//         })
//     }
// })
/* =============== HEADER STICKY =============== */
const header = document.getElementById("header");

function stickyNavbar() {
    header.classList.toggle("scrolled", window.pageYOffset > 0);
}

stickyNavbar();
window.addEventListener("scroll", stickyNavbar);

/* =============== TAMPIL-MENU =============== */
const navMenu = document.getElementById("nav-menu"),
    navToggle = document.getElementById("nav-toggle"),
    navClose = document.getElementById("nav-close");

/* =============== MENU-TAMPIL =============== */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add("show-menu");
    })
}

/* =============== SEMBUNYIKAN-MENU =============== */
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove("show-menu");
    })
}
