import React, { useState } from "react";

export function TodoList() {
  const [data, setData] = useState({
    items: ["Squirtle", "Charmander", "Bulbasaur"],
    itemsInput: "",
  });

  function handleInputChange(event) {
    setData((data) => {
      return {
        ...data,
        itemsInput: event.target.value,
      };
    });
  }

  function handleAdd() {
    setData({
      items: [...data.items, data.itemsInput],
      itemsInput: "",
    });
  }
  function handleReset() {
    setData({
      items: [],
    });
  }
  return (
    <div>
      <ul>
        {data.items.map((item, index) => (
          <li key={item + index}>
            {item}
            <button
              onClick={() => {
                data.items.splice(index, 1);
                setData((data) => {
                  return {
                    ...data,
                    items: data.items,
                  };
                });
              }}
            >
              Remove Item
            </button>
          </li>
        ))}
      </ul>
      <input
        type="text"
        name="username"
        placeholder="please insert a name"
        value={data.itemsInput}
        onChange={handleInputChange}
      ></input>
      <button onClick={handleAdd} disabled={!data.itemsInput}>
        Add
      </button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

// export class TodoList extends React.Component {
//   state = {
//     items: ["Squirtle", "Charmander", "Bulbasaur"],
//     itemsInput: "",
//   };
//   handlerAdd = () => {
//     this.setState({
//       items: [...this.state.items, this.state.itemsInput],
//       itemsInput: "",
//     });
//   };
//   handleInputChange = (event) => {
//     this.setState({
//       itemsInput: event.target.value,
//     });
//   };
//   handleReset = () => {
//     this.setState({
//       items: [],
//     });
//   };

//   render() {
//     return (
//       <div>
//         <div>{this.props.render(this.state.items)}</div>
//         <input
//           type="text"
//           name="username"
//           placeholder="please insert a name"
//           value={this.state.itemsInput}
//           onChange={this.handleInputChange}
//         ></input>
//         <button onClick={this.handlerAdd} disabled={!this.state.itemsInput}>
//           ADD
//         </button>
//         <button onClick={this.handleReset}>RESET</button>
//       </div>
//     );
//   }
// }
