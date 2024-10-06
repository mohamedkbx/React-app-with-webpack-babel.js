import * as React from "react";

export default class Popular extends React.Component {
  render() {
    const languages = ["All", "JavaSript", "Ruby", "Java", "CSS", "Python"];

    return (
      <select>
        {languages.map((language) => {
          return (
            <option key={language} value={language}>
              {language}
            </option>
          );
        })}
      </select>
    );
  }
}
