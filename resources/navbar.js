const hamBurger = document.getElementsByClassName('hamburger')[0]
const navLinks = document.getElementsByClassName('lower-header')[0]

hamBurger.addEventListener('click', () => {
    navLinks.classList.toggle('active')
})

