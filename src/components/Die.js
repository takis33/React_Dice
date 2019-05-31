import React, { Component } from "react";
import "./Die.css";

class Die extends Component {
  render() {
    let dice1 = this.props.rand1;
    let dice2 = this.props.rand2;

    return (
      <div className="Die">
        <i className={`fas fa-dice-${dice1} ${this.props.animation}`} />
        <i className={`fas fa-dice-${dice2} ${this.props.animation}`} />
      </div>
    );
  }
}

export default Die;
