
/*** Part 9 - State ***/

import React, { Component } from 'react';

class AppNine extends Component {
  constructor(props){
    super(props);

    this.state = {
      timesClicked: 0
    }
  }

  increment = () => {
    this.setState({
      timesClicked: this.state.timesClicked + 1
    })
  }

  render() {
    let myStyles = {
      width: 150,
      height: 50,
      backgroundColor: "white",
      fontSize: 14,
      cursor: "pointer"
    }
    return(
      <div>
        <h3>Watch state change in the console</h3>
        <button className="click-me" onClick={this.increment} style={myStyles}>Add One</button>
      </div>
    );
  }
}

export default AppNine;
