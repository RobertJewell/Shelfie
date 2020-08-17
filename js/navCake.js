const navSlide = () => {
    const navCake = document.querySelector('.header__cake');
    const nav = document.querySelector('.navBar')

    navCake.addEventListener('click', () => {
        nav.classList.toggle('nav-active')
        navCake.classList.toggle('toggle')
    })
}

navSlide()