import React from 'react'
import {uniqueId} from 'lodash'

export default ({pos, body, onCellClick}) => {
    const onClick = () => onCellClick(pos)
    return (
        <div className="cell" onClick={onClick}>
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
