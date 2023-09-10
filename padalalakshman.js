function toggleMobileMenu() {
    const navList = document.querySelector('nav ul');
    navList.classList.toggle('show-mobile-menu');
}

// Close mobile menu when a link is clicked
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (document.querySelector('nav ul.show-mobile-menu')) {
            toggleMobileMenu();
        }
    });
});

// Smooth scrolling for anchor links in the navigation bar
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        window.scrollTo({
            top: targetElement.offsetTop - 100, // Adjust the offset as needed
            behavior: 'smooth'
        });
    });
});
