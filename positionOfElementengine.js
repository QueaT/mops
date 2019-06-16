class PositionOfElement {
    constructor() {
    }
    set dogElement(dog) {
        this._dog = dog;
    }
    repeatOfCheckingElementPos() {
        this.arrayOfNodes.forEach((node, index) => {
            const cordY = node.getBoundingClientRect().y
            const cordX = Math.floor(node.getBoundingClientRect().x);
            this.compareCoords(this._dog, node, cordY, cordX);

        })
    }
    set elementNode(elm) {
        this.elmNodes = elm;
        this.arrayOfNodes = [...this.elmNodes];
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
            console.log('kolizja')
            node.style.display = 'none';
        }
    }
    startEngine() {
        setInterval(() => {
            this.repeatOfCheckingElementPos();
        }, 50)
    }
}


export default PositionOfElement