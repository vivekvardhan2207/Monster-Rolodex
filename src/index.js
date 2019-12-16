import React, { Component } from "react";
import ReactDOM from "react-dom";

import { CardList } from "./Components/Cardlist/carlist.component.js";
import { Searchbox } from "./Components/Searchbox/searchbox.component.jsx";

import "./styles.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ""
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredmonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
      <h1>Monster Rolodex</h1>
        <Searchbox
          placeholder="Search Monster"
          handleChange={e => {
            this.setState({ searchField: e.target.value });
          }}
        />
        <CardList monsters={filteredmonsters} />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
