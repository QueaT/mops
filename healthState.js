class HealthState {
    constructor(nodes){
        this._lifeNumber = 0 || nodes.length - 1;
        this._nodes = null || nodes;
    }


    get lifeNumber() {
     return this._lifeNumber;
    }
    changeNodesColor(){
        if(this.checkIfLifeNumberIsValid())return;
       this._nodes[this._lifeNumber].classList.add('grey');
       --this._lifeNumber;

    }
    checkIfLifeNumberIsValid(){
        if(this.lifeNumber < 0){
          alert('Przegrales :(')
           this.resetState();
           return true;
        }
    }
    resetState(){
        this._lifeNumber = this._nodes.length - 1;
        this._nodes.forEach(node =>{
            node.classList.remove('grey');
        })
    }

}




export default HealthState