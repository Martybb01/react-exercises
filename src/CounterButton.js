import React from "react";

export class CounterButton extends React.Component {
  render() {
    return (
      <div>
        <p>{this.props.count}</p>
        <button onClick={this.props.handleClickEvent}>Increment</button>
      </div>
    );
  }
}
