import "./App.css";
import React, { Component } from "react";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      toggle: false,
    };
  }

  add = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  subtract = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };

  reset = () => {
    this.setState({
      count: 0,
    });
  };

  // Prefered toogle function
  toggle = () => {
    this.setState((prevState) => {
      return {
        toggle: !prevState.toggle,
      };
    });
  };

  // Alternative:
  // toggle = () => {
  //   this.setState({
  //     toggle: !this.state.toggle,
  //   });
  // };

  render() {
    return (
      <div className="App">
        <h1> Help Us Count! </h1>
        <h1> {this.state.count} </h1>
        <button onClick={this.add}>+</button>
        <button onClick={this.subtract}>-</button>
        <button onClick={this.reset}>reset</button>
        <br />

        <div
          style={{
            height: "100px",
            backgroundColor: this.state.toggle ? "blue" : "red",
          }}
        ></div>
        <button onClick={this.toggle}>toggle</button>
      </div>
    );
  }
}

export default App;
