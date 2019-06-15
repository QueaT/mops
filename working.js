const photoDog = document.querySelector(".image--dog");
const button = document.querySelector('button');
const bone = document.querySelector('.fa-bone');



button.addEventListener('click',()=>{
  bone.classList.add('active');
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
