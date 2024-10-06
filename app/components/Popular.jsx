import * as React from "react";

export default class Popular extends React.Component {
  render() {
    return (
      <select>
        <option value="All">All</option>
        <option value="JavaSript">JavaSript</option>
        <option value="Ruby">Ruby</option>
        <option value="Java">Java</option>
        <option value="CSS">CSS</option>
        <option value="Python">Python</option>
      </select>
    );
  }
}
