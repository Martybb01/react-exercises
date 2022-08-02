import React from "react";
import { Age } from "./Age";
import { ClickCounter } from "./ClickCounter";
import { ClickTracker } from "./ClickTracker";
import { Container } from "./Container";
import { Counter } from "./Counter";
import { DisplayLanguage } from "./DisplayLanguage";
import { Hello } from "./Hello";
import { InteractiveWelcome } from "./InteractiveWelcome";
import { Login } from "./Login";
import { LanguageContext } from "./LanguageContext";
import { TodoList } from "./TodoList";
import { UncontrolledLogin } from "./UncontrolledLogin";
import { Welcome } from "./Welcome";

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
        <LanguageContext.Provider>
          <select
            value={this.state.language}
            onChange={this.handleLanguageChange}
          >
            <option value="en">English</option>
            <option value="it">Italiano</option>
          </select>
          <DisplayLanguage />
        </LanguageContext.Provider>
        <Hello />
        <Welcome name="marti" />
        <Age age={21} />
        <Counter />
        <ClickCounter initialValue={0} incrementBy={1} />
        <ClickTracker />
        <InteractiveWelcome />
        <Login />
        <UncontrolledLogin />
        <TodoList
          render={(items) => {
            return (
              <div>
                <ul>
                  {items.map((item, index) => (
                    <li key={item + index}>
                      {item}
                      <button
                        onClick={() => {
                          items.splice(index, 1);
                          this.setState({
                            items: items,
                          });
                        }}
                      >
                        Remove Item
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            );
          }}
        ></TodoList>
      </Container>
    );
  }
}
