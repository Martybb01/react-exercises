import React from "react";

export class ClickCounter extends React.Component {
  //   constructor(props) {
  //     super(props);
  //   }
  state = {
    count: this.props.initialValue,
  };
  handleClickEvent = () => {
    this.setState((state) => {
      return {
        count: state.count + this.props.incrementBy,
      };
    });
  };
  render() {
    return (
      <div>
        <p>{this.state.count}</p>
        <button onClick={this.handleClickEvent}>Increment</button>
      </div>
    );
  }
}
