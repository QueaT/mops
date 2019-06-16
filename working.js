import pos from './positionOfElementengine.js';

const photoDog = document.querySelector(".image--dog");
const button = document.querySelector('.startButton');
const fonts = document.querySelectorAll('.additional');
const start = document.querySelector(".startButton");
const finish = document.querySelector(".finish");
const buttonInstruction = document.querySelector(".instruction");
const nots = document.querySelector(".notes");
const heightEngine = new pos(-100);
//do poprawy :)
function buttonMove() {
    start.classList.add("active");
    finish.classList.add("active");
};

start.addEventListener("click", buttonMove);

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

function showInstruction(){
nots.classList.toggle("active");
}

buttonInstruction.addEventListener("click",showInstruction);



(function startGame(){
    heightEngine.dogElement = photoDog;
    heightEngine.elementNode = fonts;
    heightEngine.startEngine();
})();
