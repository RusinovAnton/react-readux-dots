import * as reducers from './reducers'
import {
    createStore,
    combineReducers,
    applyMiddleware,
    compose
} from 'redux'
import {
	routerReducer,
	routerMiddleware
} from 'react-router-redux'
import thunkMiddleware from 'redux-thunk'

export default function(history, initialState) {
	return createStore(
	  combineReducers({
	    ...reducers,
	    routing: routerReducer
	  }),
	  initialState,
	  compose(
	    applyMiddleware(
	      thunkMiddleware,
	      routerMiddleware(history)
	    )
	  )
	)
}
