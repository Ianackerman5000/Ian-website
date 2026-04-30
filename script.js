/* ================================================================
   HAMBURGER SLIDE-IN MENU
================================================================ */
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('nav-links');
const backdrop  = document.getElementById('nav-backdrop');

function openMenu() {
    hamburger.classList.add('open');
    navLinks.classList.add('open');
    backdrop.classList.add('open');
}
function closeMenu() {
    hamburger.classList.remove('open');
    navLinks.classList.remove('open');
    backdrop.classList.remove('open');
}

hamburger.addEventListener('click', () => {
    navLinks.classList.contains('open') ? closeMenu() : openMenu();
});

document.querySelectorAll('#nav-links a').forEach(link => {
    link.addEventListener('click', closeMenu);
});

backdrop.addEventListener('click', closeMenu);


/* ================================================================
   TYPED.JS — Animated role titles
================================================================ */
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


/* ================================================================
   3D TILT EFFECT — Testimonial cards
   Works on both mouse (desktop) and touch (mobile/Samsung Galaxy M51)
================================================================ */
const MAX_TILT   = 16;   /* max degrees of rotation              */
const SCALE_UP   = 1.05; /* slight lift when tilting             */

/* Apply tilt given a clientX / clientY position */
function applyTilt(card, clientX, clientY) {
    const rect    = card.getBoundingClientRect();
    const centerX = rect.left + rect.width  / 2;
    const centerY = rect.top  + rect.height / 2;

    /* How far the pointer is from center, normalized to -1 → +1 */
    const ratioX = (clientX - centerX) / (rect.width  / 2);
    const ratioY = (clientY - centerY) / (rect.height / 2);

    /* Clamp so it never flips past MAX_TILT */
    const rotateY =  Math.max(-MAX_TILT, Math.min(MAX_TILT,  ratioX * MAX_TILT));
    const rotateX =  Math.max(-MAX_TILT, Math.min(MAX_TILT, -ratioY * MAX_TILT));

    card.style.transform =
        `perspective(700px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${SCALE_UP})`;

    /* Dynamic red glow — deepens on the "raised" side */
    const glowX = -rotateY * 0.9;
    const glowY =  rotateX * 0.9;
    card.style.boxShadow =
        `${glowX}px ${glowY}px 28px rgba(183,75,75,0.65),
         0 0 18px rgba(183,75,75,0.4)`;
}

/* Reset card to flat */
function resetTilt(card) {
    card.classList.remove('is-tilting');
    card.style.transform  = '';
    card.style.boxShadow  = '';
}

/* Attach to every testimonial card */
document.querySelectorAll('.tilt-card').forEach(card => {

    /* ── MOUSE (desktop) ── */
    card.addEventListener('mousemove', (e) => {
        card.classList.add('is-tilting');
        applyTilt(card, e.clientX, e.clientY);
    });
    card.addEventListener('mouseleave', () => resetTilt(card));

    /* ── TOUCH (mobile) ── */
    card.addEventListener('touchstart', (e) => {
        /* Prevent scroll interference only when inside the card */
        card.classList.add('is-tilting');
    }, { passive: true });

    card.addEventListener('touchmove', (e) => {
        const touch = e.touches[0];
        applyTilt(card, touch.clientX, touch.clientY);
    }, { passive: true });

    card.addEventListener('touchend',    () => resetTilt(card));
    card.addEventListener('touchcancel', () => resetTilt(card));
});
