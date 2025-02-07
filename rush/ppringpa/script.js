function toggleMenu() {
    const menu = document.getElementById('nav-menu');
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
}

function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return rect.top >= 0 && rect.bottom <= window.innerHeight;
}
function handleScroll() {
    const experienceItems = document.querySelectorAll('.experience-item');
    experienceItems.forEach(item => {
        if (isInViewport(item)) {
            item.classList.add('visible');
        }
    });
}
window.addEventListener('scroll', handleScroll);
handleScroll();
