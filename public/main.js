function toggleMenu() {
    const menu = document.querySelector('.nav-list');
    const hamburgerIcon = document.querySelector('.hamburger i');
    const backdrop = document.querySelector('.backdrop');
    const hamburger = document.querySelector('.hamburger');

    // Toggle menu dan backdrop
    menu.classList.toggle('active');
    backdrop.style.pointerEvents = menu.classList.contains('active') ? 'all' : 'none';
    
    // Toggle ikon hamburger
    hamburger.classList.toggle('active');
    if (menu.classList.contains('active')) {
        hamburgerIcon.classList.remove('fa-bars');
        hamburgerIcon.classList.add('fa-times');
    } else {
        hamburgerIcon.classList.remove('fa-times');
        hamburgerIcon.classList.add('fa-bars');
    }
}

// Tutup menu saat backdrop diklik
function closeMenu() {
    const menu = document.querySelector('.nav-list');
    const hamburgerIcon = document.querySelector('.hamburger i');
    const backdrop = document.querySelector('.backdrop');
    const hamburger = document.querySelector('.hamburger');

    menu.classList.remove('active');
    backdrop.style.pointerEvents = 'none';
    hamburger.classList.remove('active');
    hamburgerIcon.classList.remove('fa-times');
    hamburgerIcon.classList.add('fa-bars');
}

// Event listener untuk hamburger dan backdrop
document.querySelector('.hamburger').addEventListener('click', toggleMenu);
document.querySelector('.backdrop').addEventListener('click', closeMenu);