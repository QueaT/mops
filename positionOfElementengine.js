class PositionOfElement {
    #score = 0;
    set dogElement(dog) {
        this.dog = dog;
    }
    set elementNode(elm) {
        this.arrayOfNodes = [...elm];
    }
    set scoreInfo(score){
        this._scoreElement = score;
    }
    get pictureWidth(){
        return this.dog.getBoundingClientRect().width;
     }

    repeatOfCheckingElementPos() {
        this.arrayOfNodes.forEach((node, index) => {
            const cordY = node.getBoundingClientRect().y
            const cordX = Math.floor(node.getBoundingClientRect().x);
            this.compareCoords(this.dog, node, cordY, cordX, index);

        })
    }
    getPositions(posOfDog, dogYpos) {
        return {
            posY: Math.floor(posOfDog.getBoundingClientRect().y),
            posX: Math.floor(posOfDog.getBoundingClientRect().x),
            height: Math.floor(dogYpos - posOfDog.getBoundingClientRect().height / 5),
        }
    }

    compareCoords(posOfDog, node, cordY, cordX, index) {
        const dogPosY = this.getPositions(posOfDog).posY;
        const dogPosX = this.getPositions(posOfDog).posX;
        const dogHeight = this.getPositions(posOfDog, dogPosY).height;
        const detectColisionY = dogPosY >= cordY && dogHeight <= cordY;
        const detectColisionX = dogPosX + 350 >= cordX && dogPosX <= cordX;
        this.checkIfColisionHappend(detectColisionX,detectColisionY,node,index);
    }

    checkIfColisionHappend(detectX,detectY,node,index){
        if (detectY && detectX) {
            this.checkIfWin(node)
            this.arrayOfNodes.splice(index, 1);
            node.style.display = 'none';
            this.addToScore();
        }
    }
    checkIfWin(node) {
        if (node.dataset.key) {
            this.arrayOfNodes.forEach(node => {
                node.style.display = 'none';
            })
            this.stopEngine();
        }
    }
    addToScore(){
        this.score++;
        //this._scoreElement.textContent = this._score;
    }

    startEngine() {
        this.engine = setInterval(() => {
            this.repeatOfCheckingElementPos();
        }, 50)
    }
    stopEngine() {
        clearInterval(this.engine)
    }
}


export default PositionOfElement