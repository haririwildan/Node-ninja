function toggleMenu() {
    const menu = document.querySelector('.nav-list');
    const hamburgerIcon = document.querySelector('.hamburger i');
    const backdrop = document.querySelector('.backdrop');
    const hamburger = document.querySelector('.hamburger');

    // toggle menu dan backdrop //
    menu.classList.toggle('active');
    backdrop.style.pointerEvents = menu.classList.contains('active') ? 'all' : 'none';
    
    // toggle ikon hamburger //
    hamburger.classList.toggle('active');
    if (menu.classList.contains('active')) {
        hamburgerIcon.classList.remove('fa-bars');
        hamburgerIcon.classList.add('fa-times');
    } else {
        hamburgerIcon.classList.remove('fa-times');
        hamburgerIcon.classList.add('fa-bars');
    }
}

// tutup menu saat backdrop diklik //
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

// event listener untuk hamburger dan backdrop //
document.querySelector('.hamburger').addEventListener('click', toggleMenu);
document.querySelector('.backdrop').addEventListener('click', closeMenu);