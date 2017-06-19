/**
 * Created by drunkengranite on 6/2/17.
 */
import React from 'react'
import {connect} from "react-redux";
import {push} from 'react-router-redux'
import { withRouter } from 'react-router-dom'


const About = (props) => {
    return (
        <div>
            <button onClick={() => props.next()}>go home</button>
        </div>
    )
};


export default withRouter(connect(
    (state) => ({

    }),
    (dispatch) => ({
        next: () => dispatch(push("/"))
    })
)(About))