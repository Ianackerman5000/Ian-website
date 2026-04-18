/* ===== HAMBURGER SLIDE-IN MENU ===== */
const hamburger  = document.getElementById('hamburger');
const navLinks   = document.getElementById('nav-links');
const backdrop   = document.getElementById('nav-backdrop');

/* Helper: open the menu */
function openMenu() {
    hamburger.classList.add('open');
    navLinks.classList.add('open');
    backdrop.classList.add('open');
}

/* Helper: close the menu */
function closeMenu() {
    hamburger.classList.remove('open');
    navLinks.classList.remove('open');
    backdrop.classList.remove('open');
}

/* Toggle on hamburger click */
hamburger.addEventListener('click', () => {
    navLinks.classList.contains('open') ? closeMenu() : openMenu();
});

/* Close when any nav link is tapped */
document.querySelectorAll('#nav-links a').forEach(link => {
    link.addEventListener('click', closeMenu);
});

/* Close when backdrop (dark overlay) is tapped */
backdrop.addEventListener('click', closeMenu);


/* ===== TYPED.JS — Animated role titles ===== */
var typed = new Typed('#typed', {
    strings: [
        'A Professional Web Developer',
        'Web Coding Coach',
        'Tech Support Specialist'
    ],
    typeSpeed:      60,
    backSpeed:      40,
    backDelay:      2000,
    loop:           true,
    cursorChar:     '|',
    smartBackspace: true
});
