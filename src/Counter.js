import React from "react";
import { CounterDisplay } from "./CounterDisplay";

export class Counter extends React.Component {
  state = {
    count: this.props.initialValue,
  };
  constructor(props) {
    super(props);
    setInterval(() => {
      this.setState((state) => {
        return {
          count: state.count + this.props.incrementValue,
        };
      });
    }, this.props.timeout);
  }

  render() {
    return (
      <div>
        <CounterDisplay count={this.state.count} />
      </div>
    );
  }
}

Counter.defaultProps = {
  initialValue: 0,
  incrementValue: 1,
  timeout: 1000,
};
