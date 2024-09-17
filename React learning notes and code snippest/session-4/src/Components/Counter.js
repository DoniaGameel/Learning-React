import React from "react";
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  increment = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  };
  render() {
    return (
      <>
        <h1>Counter: {this.state.counter}</h1>
        <button onClick={this.increment}>+</button>
      </>
    );
  }
}

export default Counter;
