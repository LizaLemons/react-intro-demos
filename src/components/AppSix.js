
/*** Part 6 - Give props ***/
  /* Inspect to see the data */


import React, { Component } from 'react';

class HelloMessage extends Component {
  render() {
    const title = "Hello World";
    return(
      <div className="hello-message">
        <h1>{title}! I am an h1</h1>
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

class AppSix extends Component {
  render() {
  	const fruitsData = ['Apples', 'Bananas', 'Carrots'];
  	const animalsData = ['Cats', 'Dogs'];
    return (
    	<div className="App">
        <HelloMessage/>
        <MyCustomSection listData={fruitsData} />
        <MyCustomSection listData={animalsData} />
    	</div>
    )
  }
}

export default AppSix;




// ---------------------------------------


// * Create a component `App` that renders two of the same component `StateList`
// * Give each StateList a prop called `usStates`
// * The first StateList's array should contain 3 east coast states; the second 2 west coast states


// ---------------------------------------
