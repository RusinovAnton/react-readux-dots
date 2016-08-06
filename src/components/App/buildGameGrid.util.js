import React from 'react'
import {uniqueId} from 'lodash'
import Cell from '../grid/Cell.container'

export default grid => {
    return grid.map(row => {
        return (
            <div key={uniqueId()} className="row">
                {row.map(cell => {
                    if (!cell) {
                        return (
                            <div key={uniqueId()} className="cell cell--empty"/>
                        )
                    }
                    return (
                        <Cell key={uniqueId()} {...cell}/>
                    );
                })}
            </div>
        )
    });
}
