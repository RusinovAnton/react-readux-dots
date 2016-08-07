import React from 'react'
import buildGameGrid from './buildGameGrid.util'

export default class App extends React.Component {

    componentDidMount(){
        this.props.setGrid({
            size: {x:5,y:5},
            scheme: ['#ffea4b', '#96b0ff', '#ff96ec']
        });
    }

    render() {
        const {game, children} = this.props;
        if (!game.grid) {
            return (<div>loading...</div>);
        }
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

}
