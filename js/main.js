const mobMenuBtn = document.querySelector('#mobMenu')
const mobExitMenu = document.querySelector('#mobExit')
const navMenu = document.querySelector('.navigationMenu')

mobMenuBtn.addEventListener('click', () => {
    navMenu.classList.toggle('mobileView')
})

mobExitMenu.addEventListener('click', () => {
    navMenu.classList.remove('mobileView')
})