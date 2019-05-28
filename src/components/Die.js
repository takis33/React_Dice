import React, { Component } from "react";
import "./Die.css";
class Die extends Component {
  render() {
    let dice1, dice2;

    if (this.props.rand1 === 1) {
      dice1 = "one";
    } else if (this.props.rand1 === 2) {
      dice1 = "two";
    } else if (this.props.rand1 === 3) {
      dice1 = "three";
    } else if (this.props.rand1 === 4) {
      dice1 = "four";
    } else if (this.props.rand1 === 5) {
      dice1 = "five";
    } else if (this.props.rand1 === 6) {
      dice1 = "six";
    }

    if (this.props.rand2 === 1) {
      dice2 = "one";
    } else if (this.props.rand2 === 2) {
      dice2 = "two";
    } else if (this.props.rand2 === 3) {
      dice2 = "three";
    } else if (this.props.rand2 === 4) {
      dice2 = "four";
    } else if (this.props.rand2 === 5) {
      dice2 = "five";
    } else if (this.props.rand2 === 6) {
      dice2 = "six";
    }

    return (
      <div className="Die">
        <i class={`fas fa-dice-${dice1}`} />
        <i class={`fas fa-dice-${dice2}`} />
      </div>
    );
  }
}

export default Die;
