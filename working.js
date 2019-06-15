const photoDog = document.querySelector(".image--dog");
const button = document.querySelector('.startButton');
const fonts = document.querySelectorAll('.additional');
const start = document.querySelector(".startButton");
const finish = document.querySelector(".finish");

function disappearButton(){
start.classList.toggle("active");
finish.classList.add("active");
}
start.addEventListener("click", disappearButton);


button.addEventListener('click',()=>{
fonts.forEach(font =>{
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
