import pos from '../positionOfElementengine.js';

const photoDog = document.querySelector(".image--dog");
const button = document.querySelector('button');
const fonts = document.querySelectorAll('.fas');
const start = document.querySelector(".startButton");

const l = new pos();
l.initialValue = [200,200];

function disappearButton() {
    start.classList.toggle("active");
}
start.addEventListener("click", disappearButton);

button.addEventListener('click', () => {
    fonts.forEach(font => {
        font.classList.add('active');
    })
})


function photoMove(e) {
    const radius = 350 / 2;
    const posX = e.pageX - radius;
    const documentWidth = window.innerWidth;
    if (e.pageX >= 350 / 2 && e.pageX < documentWidth - radius) {
        photoDog.style.left = posX + 'px';
    }
}

photoDog.addEventListener("mousemove", photoMove);