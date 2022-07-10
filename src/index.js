import { createRoot } from "react-dom/client";
import { App } from "./App";

const root = createRoot(document.getElementById("root"));

root.render(<App />);

/* What happens if no name prop is passed to the Welcome component? 
- if no name prop is passed then we'll get undefined
Can you set a default value for the name prop? 
- The logical operator OR (||) is used to set a fallback value for the name prop whenever it is not passed.
    <p>Welcome, {this.props.name} || "Luca"</p>
*/
