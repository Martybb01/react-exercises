import React from "react";
import { CounterButton } from "./CounterButton";

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
        <CounterButton
          count={this.state.count}
          handleClickEvent={this.handleClickEvent}
        />
      </div>
    );
  }
}
