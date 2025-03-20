document.addEventListener("DOMContentLoaded", function () {
    const hamburgerElement = document.querySelector('#myButton');
    const navElement = document.querySelector('.menuLinks');

    if (hamburgerElement && navElement) {
        hamburgerElement.addEventListener('click', () => {
            const isOpen = navElement.classList.toggle('open');
            hamburgerElement.textContent = isOpen ? "✖" : "☰"; // Change button text dynamically
        });
    }
});
