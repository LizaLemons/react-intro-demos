
/*** Part 7 - Do something with props ***/
/* Render a list */


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
  renderTheList(){
    const result = [];
    for (let i = 0; i < this.props.listData.length; i++) {
      let innerHtml = this.props.listData[i];
      result.push(<li key={i}>{innerHtml}</li>);
    }
    return result;
  }

  render() {
  	var itemCount = this.props.listData.length;
    return (
      <div className="list">
      	<p>I have {itemCount} items in my list</p>
        <ul>
        	{
            this.renderTheList()
        	}
        </ul>
      </div>
    );
  }
}

class AppSeven extends Component {
  render() {
  	const fruitsData = ['Apples', 'Bananas', 'Carrots'];
  	const animalsData = ['Cats', 'Dogs'];
    return (
    	<div className="App">
        <HelloMessage/>
        <hr />
        <MyCustomSection listData={fruitsData} />
        <hr />
        <MyCustomSection listData={animalsData} />
    	</div>
    )
  }
}

export default AppSeven;



// ---------------------------------------


// * Enable your `StateList` components from your last exercise to loop over their props `usStates`


// ---------------------------------------
