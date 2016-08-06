import {connect} from 'react-redux'
import App from './App.component'
import Game from '../../entity/Game'

export default connect(
	//mapStateToProps
	({grid}) => {
		return {
            game: new Game(
                {x: 5, y:10},
                ['#fc0', '#0cf', '#f0c', '#c0f']
            )
		}
	}
)(App);
