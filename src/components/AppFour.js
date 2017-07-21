
/*** Part 4 - String interpolation ***/

import React, { Component } from 'react';

class AppFour extends Component {
  render() {
    const title = "Hello World";
    return(
      <div className="hello-message">
        <h1>{title}! I am an h1 tag.</h1>
      </div>
    )
  }
}

export default AppFour;



// ---------------------------------------


// * Create a component that uses a variable
// * with your name & string interpolation to
// * render a message that says, "Hello, my name is _____!"


// ---------------------------------------
