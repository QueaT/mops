import Position from './positionOfElementengine.js';


const photoDog = document.querySelector(".image--dog");
const button = document.querySelector('.startButton');
const lifeElements = document.querySelectorAll('.fa-heart');
const fonts = document.querySelectorAll('.additional');
const start = document.querySelector(".startButton");
const finish = document.querySelector(".finish");
const pointElement = document.querySelector('.points__numbers');
const buttonInstruction = document.querySelector(".instruction");
const nots = document.querySelector(".notes");
const heightEngine = new Position(lifeElements);

function buttonMove() {
    start.classList.add("active");
    finish.classList.add("active");
};

start.addEventListener("click", buttonMove);

button.addEventListener('click', () => {
     heightEngine.setFoodDelay();
})



function photoMove(e) {
    const dogWidth = photoDog.getBoundingClientRect().width;
    const radius = dogWidth / 2;
    const posX = e.pageX - radius;
    const documentWidth = window.innerWidth;
    if (e.pageX >= dogWidth / 2 && e.pageX < documentWidth - radius) {
        photoDog.style.left = posX + 'px';
    }
}

photoDog.addEventListener("mousemove", photoMove);

function showInstruction(){
nots.classList.toggle("active");
}

buttonInstruction.addEventListener("click",showInstruction);



(function startGame() {
    heightEngine.scoreInfo = pointElement;
    heightEngine.dogElement = photoDog;
    heightEngine.elementNode = fonts;
    heightEngine.startEngine();
})();
