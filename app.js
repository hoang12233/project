var animation = document.querySelectorAll('.show-on-scroll')

function toggleAnimationEl(el) {
    var recH1 = el.getClientRects()[0]
    var heightScreen = window.innerHeight

    if(!(recH1.bottom < 0 || recH1.bottom > heightScreen))
    {
        el.classList.add('start')
    }
    else
    {
        el.classList.remove('start')
    }
}

function checkAnimation () {
    animation.forEach(el => {
        toggleAnimationEl(el)
    })
}

window.onscroll = checkAnimation
