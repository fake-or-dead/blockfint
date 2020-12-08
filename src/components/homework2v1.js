import React from "react"

class Homework2V1 extends React.Component {
  state = { counter: 0 }

  handleClicked = () => {
    this.setState({ counter: this.state.counter + 1 });
  }

  render() {
    return(
      <div>
        <span>Homework 2 V.1</span>
        <button onClick={this.handleClicked}>click!</button>
        <span>Result: {this.state.counter}</span>
      </div>
    );
  }
}

export default Homework2V1
