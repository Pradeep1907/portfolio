/*=============== Navbar Icon ===============*/

let MenuIcon = document.querySelector("#menu-icon");
let Navbar = document.querySelector(".navbar");

MenuIcon.onclick = () => {
    MenuIcon.classList.toggle("bx-x");
    Navbar.classList.toggle("active"); 
};

/*=============== Scroll Section Active Link ===============*/
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll(".navbar a");
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove("active");
                document.querySelector("header nav a[href*=" + id + "]").classList.add("active");
            });
        }
    });

    // Sticky header
    
    let header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 100);

    /*================ Remove toggle icon and navbar when click navbar link (scroll) ============== */
    MenuIcon.classList.remove("bx-x");
    Navbar.classList.remove("active");
};

/*================ Scroll Reveal ============== */

ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200 
});
ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
    ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
    ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });



 let toggleIcon = document.querySelector(".toggle-icon");
    toggleIcon.classList.remove("active");