import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'
import { ConnectedRouter} from 'react-router-redux'
import store from './store/store'
import {history} from './store/store'
import Routes from './routes'

// Create a history of your choosing (we're using a browser history in this case)



// Now you can dispatch navigation actions from anywhere!
// store.dispatch(push('/foo'))

ReactDOM.render(
    <Provider store={store}>
        { /* ConnectedRouter will use the store from Provider automatically */ }
        <ConnectedRouter history={history}>
			<Routes/>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
);
