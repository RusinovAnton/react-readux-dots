class Cell {
    constructor({pos,body}) {
        this._pos = pos;
        this._body = body || []
    }

    get pos() {
        return this._pos;
    }

    get body() {
        return this._body;
    }
}

export default Cell
