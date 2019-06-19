import healthState from './healthState.js';


class PositionOfElement extends healthState {
    constructor(nodes,endPopUp,refreshGame) {
        super(nodes,endPopUp)
        this.resetGame = false;
        this.refToGameControl = refreshGame;
    }

    set dogElement(dog) {
        this.dog = dog;
    }
    set elementNode(elm) {
        this.arrayOfNodes = [...elm];
        this._accualArrayNodes = [...elm];
    }
    set refreshState(state){
        this.resetGame = state;
    }
    get pictureWidth() {
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
            width: Math.floor(posOfDog.getBoundingClientRect().width),
            height: Math.floor(dogYpos - posOfDog.getBoundingClientRect().height / 5),
        }
    }

    compareCoords(posOfDog, node, cordY, cordX, index) {
        const dogPosY = this.getPositions(posOfDog).posY;
        const dogPosX = this.getPositions(posOfDog).posX;
        const dogWidth = this.getPositions(posOfDog).width
        const dogHeight = this.getPositions(posOfDog, dogPosY).height;
        const detectColisionY = dogPosY >= cordY && dogHeight <= cordY;
        const detectColisionX = dogPosX + dogWidth >= cordX && dogPosX <= cordX;
        this.checkIfColisionHappend(detectColisionX, detectColisionY, node, index);
        if (this.resetGame) {
            this.refToGameControl.resetNodesPosition()
            this.resetGame = false;
        }
    }

    checkIfColisionHappend(detectX, detectY, node) {
        if (detectY && detectX) {
            node.classList.add('none');
            this.checkIfWin(node)
        }
    }
    checkIfWin(node) {
        if (node.dataset.key) {
            this.changeNodesColor();
        } else {
            this.refToGameControl.addToScore();
        }
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