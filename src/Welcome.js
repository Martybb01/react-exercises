import React from "react";

export function Welcome(props) {
  return (
    <div>
      <p>Welcome, {props.name}!</p>
    </div>
  );
}

// export class Welcome extends React.Component {
//   render() {
//     return (
//       <div className="welcome">
//         <p>Welcome, {this.props.name}!</p>
//       </div>
//     );
//   }
// }
