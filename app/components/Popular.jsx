import * as React from "react";

export default class Popular extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedLanguage: "All",
    };
  }

  updateLanguage = (selectedLanguage) => {
    this.setState({
      selectedLanguage,
    });
  };

  render() {
    const languages = ["All", "JavaSript", "Ruby", "Java", "CSS", "Python"];

    return (
      <main>
        <select
          onChange={(e) => this.updateLanguage(e.target.value)}
          value={this.state.selectedLanguage}
        >
          {languages.map((language) => {
            return (
              <option key={language} value={language}>
                {language}
              </option>
            );
          })}
        </select>
        {JSON.stringify(this.state, null, 2)}
      </main>
    );
  }
}
