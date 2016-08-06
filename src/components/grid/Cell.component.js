import React from 'react'

export default ({body, onClick}) => {
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
