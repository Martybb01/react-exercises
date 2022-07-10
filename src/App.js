import React from "react";
import { Hello } from "./Hello";
import { Welcome } from "./Welcome";

export class App extends React.Component {
  render() {
    return (
      <div>
        <Hello />
        <Welcome name={<strong>Marti</strong>} age={21} />
      </div>
    );
  }
}
