import React, { useContext } from "react";
import { ThemeContext } from "./theme";

// class ThemedButton extends React.Component {
//   render() {
//     let props = this.props;
//     let theme = this.context;
//     return <button {...props} style={{ backgroundColor: theme.background }} />;
//   }
// }
// ThemedButton.contextType = ThemeContext;

function ThemedButton(props) {
  let theme = useContext(ThemeContext);
  return <button {...props} style={{ backgroundColor: theme.background }} />;
}

// function ThemedButton(props) {
//   return (
//     <ThemeContext.Consumer>
//       {(theme) => (
//         <button {...props} style={{ backgroundColor: theme.background }} />
//       )}
//     </ThemeContext.Consumer>
//   );
// }

export default ThemedButton;
