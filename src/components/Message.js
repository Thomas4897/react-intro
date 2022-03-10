import React, { Component } from "react";
import MessageChild from "./MessageChild";

export class Message extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <h1 style={styles.messageH}>Hello from Message</h1>
        <p style={{ fontFamily: "Gill Sans" }}>The name is {this.props.name}</p>
        <p style={styles.messageP}>
          {this.props.name} {this.props.message}
        </p>

        <MessageChild num={this.props.num} />
      </div>
    );
  }
}

const styles = {
  messageH: {
    fontFamily: "Gill Sans",
    fontSize: "1.5em",
    fontWeight: "bolder",
  },
  messageP: {
    fontFamily: "Roboto",
    fontSize: "1em",
    fontWeight: "bolder",
  },
};

export default Message;
