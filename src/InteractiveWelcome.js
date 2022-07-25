import React from "react";
import { Welcome } from "./Welcome";

export class InteractiveWelcome extends React.Component {
  state = {
    username: "",
  };
  handleUsername = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({ [name]: value });
  };
  render() {
    return (
      <div>
        <label>Username: </label>
        <input
          name="username"
          value={this.state.username}
          type="text"
          onChange={this.handleUsername}
        ></input>
        <Welcome name={this.state.username} />
      </div>
    );
  }
}
