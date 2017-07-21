
/*** Part 5 - Render two of the same component ***/

import React, { Component } from 'react';

class HelloMessage extends Component {
  render() {
    const title = "Hello World";
    return(
      <div className="hello-message">
        <h1>{title}! I am an h1 tag.</h1>
      </div>
    )
  }
}

class MyCustomSection extends Component {
  render() {
    return(
      <div className="list">
        This is the MyCustomSection component.
      </div>
    )
  }
}

class AppFive extends Component {
  render() {
    return(
      <div>
        <HelloMessage />
        <MyCustomSection />
        <MyCustomSection />
      </div>
    )
  }
}

export default AppFive;


// ---------------------------------------


// * Create a component that renders three other components: a Head component and a Section component twice.


// ---------------------------------------
