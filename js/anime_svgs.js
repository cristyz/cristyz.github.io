const sun = anime({
    targets: '.sun',
    top: 50,
    duration: 5000,
});

const h1 = anime({
    targets: '#section_01 h1 span',
    top: 0,
    duration: 2500,
    delay: (el, i) => 50 * i
});

document.querySelector('#section_01 h1').addEventListener('click', () => {
    h1.restart();
});

const all_birds = document.querySelectorAll('.bird');
const mouse = document.querySelector('.mouse');

document.addEventListener('mousemove', (e) => {
    const x = e.clientX / 5;
    const y = e.clientY / 5;
    all_birds.forEach(bird => {
        bird.style.transform = `translate(-${x}%, -${y}%)`;
        bird.style.opacity = '1';
    });

    mouse.style.left = `${e.pageX}px`;
    mouse.style.top = `${e.pageY}px`;
})