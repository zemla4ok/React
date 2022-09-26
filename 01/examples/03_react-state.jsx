import React from "react";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date(), isOpen: true };
  }

  onToggle() {
    this.setState((prev, props) => ({
      ...prev,
      isOpen: !prev.isOpen
    }), () => console.log("state changed"));
  }

  render() {
    return <div>Hello, world!</div>;
  }
}