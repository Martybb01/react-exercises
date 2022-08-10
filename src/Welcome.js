import React from "react";

export function Welcome({ name = "World" }) {
  return (
    <div>
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
