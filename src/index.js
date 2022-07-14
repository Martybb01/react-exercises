import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";

const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

/* What happens if no name prop is passed to the Welcome component? 
- if no name prop is passed then we'll get undefined
Can you set a default value for the name prop? 
- The logical operator OR (||) is used to set a fallback value for the name prop whenever it is not passed.
    <p>Welcome, {this.props.name} || "Luca"</p>
*/

/* What happens if the name prop is a JSX expression instead of a string?
How do you pass a prop that contains a JSX expression?
- You can pass any JS expression as a prop, by surrounding it with {}
*/
