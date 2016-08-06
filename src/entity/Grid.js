class Grid {
    constructor(body = []) {
        this._size = body.length;
        this._body = body;
    }

    set cell({x,y,body}) {
        this.body[x][y] = body;
    }

    get body() {
        return this._body;
    }
}

export default Grid
