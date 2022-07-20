import React from "react";
import { Clock } from "../../my-app/src/Clock";
import { Hello } from "./Hello";
import { Welcome } from "./Welcome";
import { Counter } from "../../my-app/src/Counter";

export class App extends React.Component {
  render() {
    return (
      <div>
        <Hello />
        <Welcome name="John" />
      </div>
    );
  }
}
