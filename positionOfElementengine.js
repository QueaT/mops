class PositionOfElement {
    constructor(state) {
        this.elm;
        this._state = state;
        this._elements = [];
        this._stateOfCoords = [];
    }

    set initialValue(initial) {
        this._elements.push(initial)
    }
    startEngine() {
        setInterval(() => {
            this.repeatOfCheckingElementPos();
        }, 100)
    }
    repeatOfCheckingElementPos() {
        this.elmNodes.forEach(node => {
            if (this._state !== node.getBoundingClientRect().y) {
                this.cordY = Math.floor(node.getBoundingClientRect().y);
                if (!this._stateOfCoords.includes(this.cordY)) {
                   // console.log(this.cordY);
                }
                this._stateOfCoords.push(this.cordY);

            }
        })
    }
    set elementNode(elm) {
        this.elmNodes = elm
    }

    compareCoords(posOfDog) {
        this.dogPosY = posOfDog.getBoundingClientRect().y;
        this.dogHeight = posOfDog.getBoundingClientRect().height;
        this.dogPosX = posOfDog.getBoundingClientRect().x;
        console.log(this.dogPosX);
         if(this.dogPos <= this.cordY){
             console.log('ok')
         }
    }
}


export default PositionOfElement