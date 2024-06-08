// script.js
document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.getElementById('menu-icon');
    const navLinks = document.getElementById('nav-links');

    menuIcon.addEventListener('click', function () {
        navLinks.classList.toggle('active');
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const textElement = document.getElementById('animated-text');
    const textToType = 'Fullstack Developer';
    let index = 0;

    function typeText() {
        if (index < textToType.length) {
            textElement.textContent += textToType.charAt(index);
            index++;
            setTimeout(typeText, 150);
        } else {
            setTimeout(eraseText, 2000);
        }
    }

    function eraseText() {
        if (index > 0) {
            textElement.textContent = textElement.textContent.substring(0, index - 1);
            index--;
            setTimeout(eraseText, 100);
        } else {
            setTimeout(typeText, 500);
        }
    }

    typeText();
});

let lastScrollTop = 0;
const navbar = document.querySelector('nav');

window.addEventListener('scroll', () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        // Scrolling down
        navbar.classList.add('navbar-hidden');
    } else {
        // Scrolling up
        navbar.classList.remove('navbar-hidden');
    }

    lastScrollTop = scrollTop;
});
