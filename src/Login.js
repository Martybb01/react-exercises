import React from "react";

export class Login extends React.Component {
  state = {
    username: "",
    password: "",
    remember: false,
  };
  handleInputChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    const type = event.target.type;
    const checked = event.target.checked;
    this.setState({ [name]: type === "checkbox" ? checked : value });
  };
  onLogin = () => {
    console.log(this.state);
    this.setState({
      username: this.state.username,
      password: this.state.password,
    });
  };
  handleReset = () => {
    this.setState({
      username: "",
      password: "",
      remember: false,
    });
  };

  render() {
    return (
      <div>
        <h4>Controlled form</h4>
        <label>Username:</label>
        <input
          type="text"
          name="username"
          value={this.state.username}
          onChange={this.handleInputChange}
        ></input>
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={this.state.password}
          onChange={this.handleInputChange}
        ></input>
        <label>Remember:</label>
        <input
          type="checkbox"
          name="remember"
          checked={this.state.remember}
          onChange={this.handleInputChange}
        ></input>
        <br />
        <button
          name="login"
          type="submit"
          onClick={this.onLogin}
          disabled={!(this.state.password && this.state.username)}
        >
          Login
        </button>
        <button onClick={this.handleReset}>Reset</button>
      </div>
    );
  }
}
