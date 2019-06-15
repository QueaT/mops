import pos from './positionOfElementengine.js';

const photoDog = document.querySelector(".image--dog");
const button = document.querySelector('.startButton');
const fonts = document.querySelectorAll('.additional');
const start = document.querySelector(".startButton");
const finish = document.querySelector(".finish");
const buttonInstruction = document.querySelector(".instruction");
const nots = document.querySelector(".notes");
const heightEngine = new pos(-100);

function disappearButton() {
    start.classList.toggle("active");
    finish.classList.add("active");
};

start.addEventListener("click", disappearButton);

button.addEventListener('click', () => {
    fonts.forEach(font => {
        font.classList.add('active');
        getItemHeight(font)
    })
})

function getItemHeight(item){
const posY = item.getBoundingClientRect().y;
heightEngine.initialValue = posY
}

function photoMove(e) {
    heightEngine.comparecoords(photoDog);
    const radius = 350 / 2;
    const posX = e.pageX - radius;
    const documentWidth = window.innerWidth;
    if (e.pageX >= 350 / 2 && e.pageX < documentWidth - radius) {
        photoDog.style.left = posX + 'px';
    }
}

photoDog.addEventListener("mousemove", photoMove);

function showInstruction(){
nots.classList.toggle("active");
}

buttonInstruction.addEventListener("click",showInstruction);
heightEngine.elementNode = fonts;
heightEngine.startEngine();
