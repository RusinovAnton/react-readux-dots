class Grid {
    constructor(body = []) {
        this._size = body.length;

        // TODO: add validation for grid body
        // throw error if there is Grid is coming as body argument
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
