import React from 'react'

export default ({pos, body, onClick}) => {
    let onClickyClick = function() {
        onClick(pos)
    }
    return (
        <div className="cell" onClick={onClickyClick}>
            <div
                className={`item item-shape--${body.shape}`}
                style={{backgroundColor: body.color}}>
                .
            </div>
        </div>
    )
}
