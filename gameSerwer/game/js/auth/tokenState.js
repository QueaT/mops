class TokenState {
    constructor() {
        this._token;
    }

    get token() {
        return this._token;
    }
    set tokenID(token) {
        this._token = token;
    }
}

const tokenState = new TokenState();

export default tokenState;