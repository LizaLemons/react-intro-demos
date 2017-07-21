
/*** Part 8 • Props with styles & loops ***/

import React, { Component } from 'react';


class HelloComponent extends Component {
  render(){
    return(
      <div>Hello, {this.props.name}!</div>
    );
  }
}

class MyListComponent extends Component {

  // this will run when `render` runs
  renderTheList() {
    let result = [];
    for (var i = 0; i < this.props.valList.length; i++) {
      let innerHtml = this.props.valList[i];
      result.push(<li key={i}>{innerHtml}</li>);
    }
    console.log(result);
    return result;
  }

  render() {
    return (
      <div>
        <h3>List:</h3>
        <ul>
          {
            this.renderTheList()
          }
        </ul>
      </div>
    )
  }
}

class AppEight extends Component {
  render(){

    let myStyles = {
      border: '3px dashed #999',
      padding: '50px',
      color: 'red'
    };

    let cars = ['volvo', 'saab', 'mercedes', 'audi'];
    let foods = ['lollipops', 'tacos', 'pizza', 'coffee'];

    return(
      <div style={myStyles}>
        <HelloComponent name="Liza" />
        <hr />
        <MyListComponent valList={cars} />
        <MyListComponent valList={foods} />
      </div>
    )

  }
}

export default AppEight;
