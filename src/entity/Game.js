import {random} from 'lodash'
import Cell from './Cell'
import Dot from './Dot'
import Grid from './Grid'

class Game {
    constructor({size, scheme = [], matrix}) {
        this._size = size || {x:5,y:5};
        this._scheme = scheme;

        if (matrix === void(0)) {
            this.grid = this.initRandomGrid();
        } else {
            this.grid = matrix;
        }
    }

    get grid() {
        return this._grid.body;
    }

    set grid(matrix) {
        this._grid = new Grid(matrix);
    }

    setCell(pos, cell) {
        this._grid.cell = {
            x: pos.x,
            y: pos.y,
            body: cell
        }
    }

    initRandomGrid() {

        let gridBody = [];
        let x,y;

        for (x = 0; x < this._size.x; x++) {
            gridBody.push([]);
            for (y = 0; y < this._size.y;y++) {
                gridBody[x].push(
                    new Cell({
                        pos: {
                            x,y
                        },
                        body: [new Dot(this._scheme[random(this._scheme.length - 1)])]
                    })
                );
            }
        }
        return gridBody;
    }
}

export default Game
