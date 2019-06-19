import healthState from './healthState.js';
class PositionOfElement extends healthState {
    constructor(nodes) {
        super(nodes)
        this.score = 0;
    }
    set dogElement(dog) {
        this.dog = dog;
    }
    set elementNode(elm) {
        this.arrayOfNodes = [...elm];
        this._accualArrayNodes = [...elm];
    }
    set scoreInfo(score) {
        this._scoreElement = score;
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
    }

    checkIfColisionHappend(detectX, detectY, node, index) {
        if (detectY && detectX) {
            node.classList.add('none');
            this.checkIfWin(node)
        }
    }
    checkIfWin(node) {
        if (node.dataset.key) {
            this.changeNodesColor();

            if (this.checkIfLifeNumberIsValid()) {
                this.resetNodesPosition()
            }
        } else {
            this.addToScore();
        }
    }

    resetNodesPosition() {
        this.arrayOfNodes.forEach(node => {
            node.classList.remove('active');
            node.style.transition = 'unset'; 
            node.classList.remove('none');
        })
        setTimeout(() => {
           this.setFoodDelay();
        }, 2000)
    }

    addToScore() {
        this.score += 10;
        this._scoreElement.textContent = this.score;
    }

    startEngine() {
        this.engine = setInterval(() => {
            this.repeatOfCheckingElementPos();
        }, 50)
    }
    stopEngine() {
        clearInterval(this.engine)
    }

    setFoodDelay() {
        const arrayOfDelays = [];
        this.arrayOfNodes.forEach(font => {
            font.style.transition = '3s linear';
            font.style.transitionDelay = this.genereteRandomDelay(20, 1, arrayOfDelays) + 's';
            arrayOfDelays.push(parseInt(font.style.transitionDelay));
            font.classList.add('active');
        })
    }
    genereteRandomDelay(max, min, accualValues) {
        const randomNum = Math.floor(Math.random() * max) + min;
        if (accualValues.includes(randomNum)) {
            return this.genereteRandomDelay(max, min, accualValues)
        } else {
            return randomNum;
        }
    }
}


export default PositionOfElement