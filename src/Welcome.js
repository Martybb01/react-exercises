import React from "react";
import { Link } from "react-router-dom";

export function Welcome({ name = "World" }) {
  return (
    <div>
      <Link to="/counter">Go to Counter</Link>
      <p>Welcome, {name}!</p>
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
