import React, { useContext } from "react";
import { LanguageContext } from "./LanguageContext";

export function DisplayLanguage() {
  const language = useContext(LanguageContext);

  return <h3>Current Language: {language}</h3>;
}

// export class DisplayLanguage extends React.Component {
//   render() {
//     return (
//       <div>
//         <LanguageContext.Consumer>
//           {(language) => {
//             return <h1>The selected language is: {language}</h1>;
//           }}
//         </LanguageContext.Consumer>
//       </div>
//     );
//   }
// }
