import React from 'react'
import {uniqueId} from 'lodash'
import Cell from '../grid/Cell.container'

const renderCell = cell => {
    if (!cell) {
        return (
            <div key={uniqueId()} className="cell cell--empty"/>
        )
    }
    return (
        <Cell key={uniqueId()} {...cell}/>
    );
}

const getRowCells = (grid, y) => {
    let rowMap = [];
    let x;
    for (x=0; x < grid.length; x++) {
        rowMap.push(renderCell(grid[x][y]));
    }
    return rowMap;
}

// Turn grid for -90deg
export default grid => {

    let y;
    let gridMap = [];

    for (y = grid[0].length - 1; y >= 0 ; y--) {
        gridMap.push(
            (
                <div key={uniqueId()} className="row">
                     {
                        getRowCells(grid, y)
                    }
                </div>
            )
        );
    }
    console.log(grid);
    console.log(gridMap);

    return gridMap;
}
