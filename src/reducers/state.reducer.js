/**
 * Created by drunkengranite on 5/29/17.
 */
import {handleActions} from 'redux-actions'

let initialState = {
    hello: "world"
};


const stateReducer = handleActions({

    //HEADER TAB REDUCERS BLOW



}, initialState);

export default stateReducer;