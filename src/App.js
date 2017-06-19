import React, { Component } from 'react';
import logo from './logo.svg';
import {connect} from 'react-redux'
import {push} from 'react-router-redux'
import { withRouter } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
          <button onClick={() => this.props.next()}> click me</button>
      </div>
    );
  }
}


export default withRouter(connect(
    (state) => ({

    }),
    (dispatch) => ({
        next: () => dispatch(push("/about"))
    })
)(App))