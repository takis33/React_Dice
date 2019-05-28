import React from "react";
import Die from "./Die";

class RollDice extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dice1: Math.floor(Math.random() * 6) + 1,
      dice2: Math.floor(Math.random() * 6) + 1
    };
    this.genRandom = this.genRandom.bind(this);
  }
  genRandom() {
    let rand1 = Math.floor(Math.random() * 6) + 1;
    let rand2 = Math.floor(Math.random() * 6) + 1;
    this.setState({ dice1: rand1, dice2: rand2 });
  }

  render() {
    return (
      <div className="RollDice">
        <Die rand1={this.state.dice1} rand2={this.state.dice2} />
        <button onClick={this.genRandom}>Roll Dice!</button>
      </div>
    );
  }
}

export default RollDice;
