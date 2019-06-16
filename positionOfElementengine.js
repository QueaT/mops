class PositionOfElement {
    constructor() {}
    set dogElement(dog) {
        this._dog = dog;
    }
    set elementNode(elm) {
        this.arrayOfNodes = [...elm];
    }
    repeatOfCheckingElementPos() {
        this.arrayOfNodes.forEach((node, index) => {
            const cordY = node.getBoundingClientRect().y
            const cordX = Math.floor(node.getBoundingClientRect().x);
            this.compareCoords(this._dog, node, cordY, cordX);

        })
    }
    getPositions(posOfDog, dogYpos) {
        return {
            posY: Math.floor(posOfDog.getBoundingClientRect().y),
            posX: Math.floor(posOfDog.getBoundingClientRect().x),
            height: Math.floor(dogYpos - posOfDog.getBoundingClientRect().height / 5),
        }
    }

    compareCoords(posOfDog, node, cordY, cordX) {
        const dogPosY = this.getPositions(posOfDog).posY;
        const dogPosX = this.getPositions(posOfDog).posX;
        const dogHeight = this.getPositions(posOfDog, dogPosY).height;
        const detectColisionY = dogPosY >= cordY && dogHeight <= cordY;
        const detectColisionX = dogPosX + 350 >= cordX && dogPosX <= cordX
        if (detectColisionY && detectColisionX) {
            this.checkIfWin(node)
            node.style.display = 'none';
        }
    }
    checkIfWin(node) {
        if (node.dataset.key) {
            this.arrayOfNodes.forEach(node =>{
                node.style.display = 'none';
            })
             this.stopEngine();
        }
    }
    startEngine() {
       this.engine = setInterval(() => {
            this.repeatOfCheckingElementPos();
        }, 50)
    }
    stopEngine(){
        clearInterval(this.engine)
    }
}


export default PositionOfElement