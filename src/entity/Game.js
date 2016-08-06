import {random} from 'lodash'
import Dot from './Dot'
import Grid from './Grid'
import gridBodyArray from '../utils/gridBodyArray'

class Game {
    constructor(size, scheme = []) {
        this._size = size || {x:5,y:5};
        this._scheme = scheme;
        // this._grid = this.initGrid();
        console.log(gridBodyArray);
        this._grid = gridBodyArray;
    }

    get grid() {
        return this._grid.body;
    }

    initGrid() {

        let gridBody = [];
        let x,y;

        for (y = 0; y < this._size.y; y++) {
            gridBody.push([]);
            for (x = 0; x < this._size.x;x++) {
                gridBody[y].push({
                    pos: {
                        x,y
                    },
                    body: new Dot(this._scheme[random(this._scheme.length - 1)])
                });
            }
        }

        return new Grid(gridBody);
    }
}

export default Game
