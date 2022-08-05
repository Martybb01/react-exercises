import React, { useEffect, useState } from "react";
import { CounterDisplay } from "./CounterDisplay";

export function Counter({
  initialValue = 0,
  incrementValue = 1,
  timeout = 1000,
}) {
  const [count, setCount] = useState(initialValue);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(count + incrementValue);
    }, timeout);
    return () => {
      clearInterval(interval);
    };
  }, [count, timeout, incrementValue]);

  return <CounterDisplay count={count} />;
}

// export class Counter extends React.Component {
//   state = {
//     count: this.props.initialValue,
//   };
//   // constructor(props) {
//   //   super(props);
//   //   setInterval(() => {
//   //     this.setState((state) => {
//   //       return {
//   //         count: state.count + this.props.incrementValue,
//   //       };
//   //     });
//   //   }, this.props.timeout);
//   // }
//   componentDidMount() {
//     this.timerID = setInterval(() => this.tickTok(), this.props.timeout);
//   }

//   tickTok() {
//     this.setState((state) => {
//       return {
//         count: state.count + this.props.incrementValue,
//       };
//     });
//   }
//   render() {
//     return (
//       <div>
//         <CounterDisplay count={this.state.count} />
//       </div>
//     );
//   }
// }

// Counter.defaultProps = {
//   initialValue: 0,
//   incrementValue: 1,
//   timeout: 1000,
// };
