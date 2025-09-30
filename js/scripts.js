const hamburgerElement = document.querySelector('#myButton')
const navElement = document.querySelector('.menuLinks')

hamburgerElement.addEventListener('click', () => {
    const isOpen = hamburgerElement.classList.toggle('open')
    navElement.classList.toggle('open')
    // swap hamburger icon with an X for clarity
    hamburgerElement.textContent = isOpen ? '✕' : '☰'
    // update accessible state
    hamburgerElement.setAttribute('aria-expanded', isOpen ? 'true' : 'false')
    hamburgerElement.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu')
})