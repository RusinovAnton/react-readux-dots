import React from 'react'

export default ({pos, body, onCellClick}) => {
    const onClick = () => onCellClick(pos)
    return (
        <div className="cell" onClick={onClick}>
            <div
                className={`item item-shape--${body.shape}`}
                style={{backgroundColor: body.color}}>
                .
            </div>
        </div>
    )
}
