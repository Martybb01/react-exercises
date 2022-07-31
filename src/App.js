import React from "react";
import { Age } from "./Age";
import { ClickCounter } from "./ClickCounter";
import { ClickTracker } from "./ClickTracker";
import { Counter } from "./Counter";
import { Hello } from "./Hello";
import { InteractiveWelcome } from "./InteractiveWelcome";
import { Login } from "./Login";
import { TodoList } from "./TodoList";
import { UncontrolledLogin } from "./UncontrolledLogin";
import { Welcome } from "./Welcome";

export class App extends React.Component {
  render() {
    return (
      <div>
        <Hello />
        <Welcome name="marti" />
        <Age age={21} />
        <Counter />
        <ClickCounter initialValue={0} incrementBy={1} />
        <ClickTracker />
        <InteractiveWelcome />
        <Login />
        <UncontrolledLogin />
        <TodoList />
      </div>
    );
  }
}
