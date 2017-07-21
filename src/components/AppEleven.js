
/*** Part 11 - Passing callbacks to children from parents through props --> color changer ***/

import React, { Component } from 'react';

class ColorChanger extends Component {
  render(){
    let divStyles = {
      margin: 30
    }

    return (
      <div>
        {
          this.props.colors.map((color, i) =>
            <div style={divStyles} key={i} onClick={ () => { this.props.onNewColorSelected(color) } }> {color} </div>
          )
        }
      </div>
    );
  }
}

class AppEleven extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bgColor: 'red',
    }
  }

  changeBackgroundColor = (color) => {
    this.setState({
      bgColor: color,
    });
  }

  render() {
    const colors = ['red', 'blue', 'yellow', 'green', 'orange', 'pink', 'grey', 'purple'];

    let divStyles = {
      backgroundColor: this.state.bgColor,
      cursor: 'pointer',
      color: 'white',
      fontSize: 25
    }

    return (
			<div style={divStyles}>
        <ColorChanger colors={colors} onNewColorSelected={this.changeBackgroundColor} />
			</div>
		);
  }
}

export default AppEleven;
