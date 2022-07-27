import React from "react";

export class UncontrolledLogin extends React.Component {
  _autoFocusRef = React.createRef();

  componentDidMount() {
    this._autoFocusRef.current.focus();
  }
  handleFormSubmit = (event) => {
    event.preventDefault();

    const username = event.target.elements.username.value;
    const password = event.target.elements.password.value;
    const remember = event.target.elements.remember.checked;

    console.log({ username, password, remember });
  };
  render() {
    return (
      <div>
        <h4>Uncontrolled form</h4>
        <form onSubmit={this.handleFormSubmit}>
          <label>Username: </label>
          <input name="username" ref={this._autoFocusRef}></input>
          <label> Password: </label>
          <input name="password" type="password"></input>
          <label> Remember: </label>
          <input name="remember" type="checkbox"></input>
          <br />
          <button type="submit">Login</button>
          <button type="reset">Reset</button>
        </form>
      </div>
    );
  }
}
