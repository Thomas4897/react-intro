import React, { Component } from "react";

export class MessageChild extends Component {
  render() {
    console.log(this.props);
    return <div>Favorite number is {this.props.num}</div>;
  }
}

export default MessageChild;
