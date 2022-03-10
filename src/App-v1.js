import "./App.css";
import Message from "./components/Message";
import React, { Component } from "react";

export class App extends Component {
  render() {
    return (
      <div className="App">
        <Message name={"thomas"} message={"I'm tired"} num={3} />
        <Message name={"johnny"} message={"I'm hungry"} num={4} />
        <Message name={"antonio"} message={"I'm sleepy"} num={1} />
      </div>
    );
  }
}

export default App;
