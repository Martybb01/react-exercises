import React from "react";
import { Link } from "react-router-dom";
import { useCounter } from "./useCounter";

export function ClickCounter({ initialValue = 0 }) {
  const { counter, onIncrement, onDecrement, onReset } =
    useCounter(initialValue);

  const CounterStyle = {
    color: counter < 5 ? "red" : "green",
  };

  return (
    <div style={CounterStyle}>
      <Link to="/">Back</Link>
      <p> {counter} </p>
      <button onClick={onIncrement}>Increment</button>
      <button onClick={onDecrement}>Decrement</button>
      <button onClick={onReset}>Reset</button>
    </div>
  );
}

// export class ClickCounter extends React.Component {
//   //   constructor(props) {
//   //     super(props);
//   //   }
//   state = {
//     count: this.props.initialValue,
//   };
//   handleClickEvent = () => {
//     this.setState((state) => {
//       return {
//         count: state.count + this.props.incrementBy,
//       };
//     });
//   };
//   render() {
//     const CounterStyle = {
//       color: this.state.count < 5 ? "red" : "green",
//     };
//     return (
//       <div style={CounterStyle}>
//         <p>{this.state.count}</p>
//         <button onClick={this.handleClickEvent}>Increment</button>
//       </div>
//     );
//   }
// }
