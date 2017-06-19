/**
 * Created by drunkengranite on 5/29/17.
 */
import stateReducer from './state.reducer'
import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'

const allReducers = combineReducers({
    state: stateReducer,
    router: routerReducer
});

export default allReducers;
