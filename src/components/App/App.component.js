import React from 'react'
import buildGameGrid from './buildGameGrid.util'

export default ({children, game}) => {
    let gameGrid = buildGameGrid(game.grid);
	return (
			<div>
                <div className="grid">
                    {gameGrid}
                </div>
				{children}
			</div>
		)
}
