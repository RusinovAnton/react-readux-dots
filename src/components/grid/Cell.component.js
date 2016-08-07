import React from 'react'
import {uniqueId} from 'lodash'

export default function Cell({pos, body, onCellClick}) {
    return (
        <div className="cell" onClick={() => onCellClick(pos)}>
            {
                body.map(cellItem => {
                    return (
                        <div
                            key={uniqueId()}
                            className={`cell-item cell-item--${cellItem.type.toLowerCase().replace(/[_\s]/g, '-')} cell-item--shape-${cellItem.shape}`}
                            style={{backgroundColor: cellItem.color}}>
                            .
                        </div>
                    )
                })
            }
        </div>
    )
}
