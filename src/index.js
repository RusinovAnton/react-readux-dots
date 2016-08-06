import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import {
  Router,
  Route,
  hashHistory
} from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import makeStore from './store'
import App from './components/App/App.container'

const initialState = {};
const store = makeStore(hashHistory, initialState);
const history = syncHistoryWithStore(hashHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <div>
      <Router history={history}>
        <Route path="/" component={App}>
        </Route>
      </Router>
    </div>
  </Provider>,
  document.getElementById('root')
)
