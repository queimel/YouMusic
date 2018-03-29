import React from "react";

class Hello extends React.Component {
  render() {
    return React.DOM.h1({ className: "mystyle" }, `Hello ${this.props.name}!`);
  }
}

export default Hello;