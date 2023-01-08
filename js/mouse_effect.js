const mouseEffectDiv = document.querySelector('#mouse_effect')

document.addEventListener('mousemove', function (event) {
    mouseEffectDiv.style.left = event.pageX + 'px'
    mouseEffectDiv.style.top = event.pageY + 'px'
})

document.querySelectorAll('.expand_mouse_effect').forEach(function (element) {
    element.addEventListener('mouseenter', function (event) {
        mouseEffectDiv.classList.add('expand')
    })

    element.addEventListener('mouseleave', function (event) {
        mouseEffectDiv.classList.remove('expand')
    })
})