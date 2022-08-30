const navBar = document.querySelector('nav')
const menuBtns = document.querySelectorAll('.logo_icon')
const overlay = document.querySelector('.overLay')

menuBtns.forEach(menuBtn => {
    menuBtn.onclick = () => {
        navBar.classList.toggle('open')
    }
})

overlay.onclick = () => {
    navBar.classList.remove('open')
}
