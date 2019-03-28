import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Quotes from "./Quotes";
import Lamp from "./Lamp";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      working: true,
      speed: "App-logo"
    };
  }

  workingClick = () => {
    this.setState({ working: !this.state.working });
    this.state.working
      ? this.setState({ speed: "App-logo" })
      : this.setState({ speed: "App-logo-speed" });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className={this.state.speed} alt="logo" />

          <h1 className="App-title">Simpsons Quotes</h1>
        </header>
        <button onClick={this.workingClick}>Click here</button>
        <Lamp on />
        <Lamp />
        <Quotes />
      </div>
    );
  }
}

export default App;
