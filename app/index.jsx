import * as React from "react";
import * as React from "react-dom/clint";

class App extends React.Component {
  render() {
    return <div>Hello</div>;
  }
}

const rootElement = document.getElementById("app");
const root = ReactDOM.createRoot(rootElement);
root.render(<app />);
