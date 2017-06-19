/**
 * Created by drunkengranite on 6/2/17.
 */
import React from "react";
import {Route, Switch} from "react-router";
import App from './App'
import About from './about'


const Routes = (props) => {

    return(
        <div>
            <Route exact path="/" component={App}/>
            <Route exact path="/about" component={About}/>
        </div>
    )
};




export default Routes;





