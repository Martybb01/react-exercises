import React from "react";
import { CounterDisplay } from "./CounterDisplay";

export class Counter extends React.Component {
  state = {
    count: this.props.initialValue,
    update: 0,
  };
  // constructor(props) {
  //   super(props);
  //   setInterval(() => {
  //     this.setState((state) => {
  //       return {
  //         count: state.count + this.props.incrementValue,
  //       };
  //     });
  //   }, this.props.timeout);
  // }
  componentDidMount() {
    this.timerID = setInterval(() => {
      this.tickTok();
      this.setState((state) => {
        return {
          update: state.update + 1,
        };
      });
    }, this.props.timeout);
  }

  componentDidUpdate(props, state) {
    if (state.update === 10) {
      this.setState(() => {
        return {
          count: this.props.initialValue,
          update: 0,
        };
      });
    }
  }

  componentWillUnmount() {
    if (this.timerID) {
      clearInterval(this.timerID);
    }
  }
  tickTok() {
    // this.setState((state) => {
    //   if (state.count < this.props.initialValue * 10) {
    //     return {
    //       count: state.count + this.props.incrementValue,
    //     };
    //   } else {
    //     return {
    //       count: this.props.initialValue,
    //     };
    //   }
    // });
    this.setState((state) => {
      return {
        count: state.count + this.props.incrementValue,
      };
    });
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
