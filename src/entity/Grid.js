class Grid {
    constructor(body = []) {
        this._size = body.length;

        // TODO: add validation for grid body
        // throw error if there is Grid is coming as body argument
        this._body = body;
    }

    set cell({x,y,body}) {
        this._body[x][y]._body = body;
    }

    appendCell({x,y,body}) {
        this._body[x][y]._body.push(body);
    }

    get body() {
        return this._body;
    }
}

export default Grid
