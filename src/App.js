import React from "react";
import { Container } from "./Container";
import { TodoList } from "./TodoList";

export class App extends React.Component {
  state = {
    language: "en",
  };
  handleLanguageChange = (event) => {
    this.setState({
      language: event.target.value,
    });
  };
  render() {
    return (
      <Container title={<h2>React</h2>}>
        <TodoList />
      </Container>
    );
  }
}
