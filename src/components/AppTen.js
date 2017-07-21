
/*** Part 10 - Events & displaying state --> big counter ***/

import React, { Component } from 'react';


class AppTen extends Component {
	constructor(props){
		super(props)
		this.state = {
			counter: 0,
	    name: 'liza'
		}
	}

	increment = (event) => {
		this.setState({
			counter: this.state.counter + 1
		});
	}

	decrement = (event) => {
    // console.log(event);
    console.log(event.nativeEvent);
		this.setState({
			counter: this.state.counter - 1
		});
	}

	render() {
		console.log("STATE:", this.state);
		return (
			<div className="App">
        <button onClick={this.increment}>+</button>
  				<h1>{this.state.counter}</h1>
        <button onClick={this.decrement}>-</button>
			</div>
		);
	}

}

export default AppTen;
