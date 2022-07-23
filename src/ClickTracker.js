import React from "react";

export class ClickTracker extends React.Component {
  state = {
    button: this.props.name,
  };
  trackLastPress = (event) => {
    this.setState({
      button: event.currentTarget.name,
    });
  };
  render() {
    return (
      <div>
        <button name="first btn" onClick={this.trackLastPress}></button>
        <button name="second btn" onClick={this.trackLastPress}></button>
        <button name="third btn" onClick={this.trackLastPress}></button>
        <h1>The last button pressed is: {this.state.button} </h1>
      </div>
    );
  }
}
