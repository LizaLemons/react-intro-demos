
/*** Part 3 - Composing Components ***/


import React, { Component } from 'react';

class HelloMessage extends Component {
  render() {
    return(
      <div className="hello-message">
        <h1>Hello, world!</h1>
      </div>
    )
  }
}

class ListContainer extends Component {
  render() {
    return(
      <div className="list-div">
        <ul>
        	<li>This</li>
        	<li>is</li>
        	<li>a</li>
        	<li>list</li>
        </ul>
      </div>
    )
  }
}

class AppThree extends Component {
  render() {
    return(
      <div className="App">
        <HelloMessage />
        <ListContainer />
      </div>
    )
  }
}

export default AppThree;


// ---------------------------------------


// * Create two components, Header & Body, that are contained in a single component, App. Render App to the DOM.


// ---------------------------------------
