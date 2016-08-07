import {connect} from 'react-redux'
import App from './App.component'

import {setGrid} from '../../actions'

export default connect(
	//mapStateToProps
	({game}) => {
		return {
            game
		}
	},
    // mapDispatchToProps
    {
        setGrid
    }
)(App);
