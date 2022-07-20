import React from "react";
import { Age } from "./Age";

export class Welcome extends React.Component {
  render() {
    return (
      <div>
        <p>
          Welcome, {this.props.name === "John" && this.props.name}!
          <Age age={21} />
        </p>
      </div>
    );
  }
}
