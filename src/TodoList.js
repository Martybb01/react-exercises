import React from "react";

export class TodoList extends React.Component {
  state = {
    items: ["Squirtle", "Charmander", "Bulbasaur"],
    itemsInput: "",
  };
  handlerAdd = () => {
    this.setState({
      items: [...this.state.items, this.state.itemsInput],
    });
  };
  handleInputChange = (event) => {
    this.setState({
      itemsInput: event.target.value,
    });
  };
  render() {
    return (
      <div>
        <div>
          <ul>
            {this.state.items.map((item, index) => (
              <li key={item + index}>{item}</li>
            ))}
          </ul>
        </div>
        <input
          type="text"
          name="username"
          placeholder="please insert a name"
          value={this.state.itemsInput}
          onChange={this.handleInputChange}
        ></input>
        <button onClick={this.handlerAdd}>ADD</button>
      </div>
    );
  }
}
