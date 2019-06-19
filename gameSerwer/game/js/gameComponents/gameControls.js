class GameControl {
    constructor(arrayOfNodes) {
        this.arrayOfNodes = arrayOfNodes;
        this.score = 0;
    }

    set scoreInfo(score) {
        this._scoreElement = score;
    }
    addToScore() {
        this.score += 10;
        this._scoreElement.textContent = this.score;
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

export default GameControl;