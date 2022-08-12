import { React } from "react";
import { Link, Route, Routes } from "react-router-dom";
import { Container } from "./Container";
import { Welcome } from "./Welcome";
import { ClickCounter } from "./ClickCounter";
import { ShowGithubUser } from "./ShowGithubUser";
import { GithubUserList } from "./GithubUserList";

export function App() {
  return (
    <div>
      <Container
        title={
          <div>
            <h1>My awesome App</h1>
            <div>
              <Link to="/">Home</Link> |<Link to="users/">GithubUser</Link> |
              <Link to="/counter">Counter</Link>
            </div>
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Welcome name="Martina" />} />
          <Route path="/counter" element={<ClickCounter />} />
          <Route path="/users" element={<GithubUserList />}>
            <Route path=":username" element={<ShowGithubUser />} />
          </Route>
          <Route
            path="*"
            element={
              <div>
                <p>Not Found</p>
              </div>
            }
          />
        </Routes>
      </Container>
    </div>
  );
}

// import React from "react";
// import { Age } from "./Age";
// import { ClickCounter } from "./ClickCounter";
// import { ClickTracker } from "./ClickTracker";
// import { Container } from "./Container";
// import { Counter } from "./Counter";
// import { DisplayLanguage } from "./DisplayLanguage";
// import { Hello } from "./Hello";
// import { InteractiveWelcome } from "./InteractiveWelcome";
// import { Login } from "./Login";
// import { LanguageContext } from "./LanguageContext";
// import { TodoList } from "./TodoList";
// import { UncontrolledLogin } from "./UncontrolledLogin";
// import { Welcome } from "./Welcome";
// import { Sum } from "./Sum";
// import { GithubUser } from "./GithubUser";
// import { GithubUserList } from "./GithubUserList";
// import { FilteredList } from "./FilteredList";
// import { CarDetails } from "./CarDetails";

// export class App extends React.Component {
//   state = {
//     language: "en",
//   };
//   handleLanguageChange = (event) => {
//     this.setState({
//       language: event.target.value,
//     });
//   };

//   render() {
//     return (
//       <Container title={<h2>React</h2>}>
//         <LanguageContext.Provider value={this.state.language}>
//           <select
//             value={this.state.language}
//             onChange={this.handleLanguageChange}
//           >
//             <option value="en">English</option>
//             <option value="it">Italiano</option>
//           </select>
//           <DisplayLanguage />
//         </LanguageContext.Provider>
//         <Hello />
//         <Welcome name="marti" />
//         <Age age={21} />
//         <GithubUser username="Martybb01" />
//         <GithubUserList />
//         <Counter />
//         <ClickCounter />
//         <ClickTracker />
//         <InteractiveWelcome />
//         <Login />
//         <UncontrolledLogin />
//         <h4>Car form:</h4>
//         <CarDetails
//           initialData={{ model: "Tesla", year: 2021, color: "red" }}
//         />

//         <FilteredList list={this.props.list} />
//         <TodoList
//           render={(items) => {
//             return (
//               <div>
//                 <ul>
//                   {items.map((item, index) => (
//                     <li key={item + index}>
//                       {item}
//                       <button
//                         onClick={() => {
//                           items.splice(index, 1);
//                           this.setState({
//                             items: items,
//                           });
//                         }}
//                       >
//                         Remove Item
//                       </button>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             );
//           }}
//         ></TodoList>
//         <Sum />
//       </Container>
//     );
//   }
// }
