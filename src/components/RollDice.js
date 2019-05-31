import React from "react";
import Die from "./Die";
import "./RollDice.css";

class RollDice extends React.Component {
  static defaultProps = {
    sides: ["one", "two", "three", "four", "five", "six"]
  };

  constructor(props) {
    super(props);
    this.state = {
      dice1: this.props.sides[Math.floor(Math.random() * 6)],
      dice2: this.props.sides[Math.floor(Math.random() * 6)],
      button_text: "Roll Dice!",
      button_status: false,
      dice_animation: ""
    };
    this.genRandom = this.genRandom.bind(this);
    this.buttonDisabledTime = this.buttonDisabledTime.bind(this);
  }
  genRandom() {
    let rand1 = this.props.sides[Math.floor(Math.random() * 6)];
    let rand2 = this.props.sides[Math.floor(Math.random() * 6)];
    this.setState({
      dice1: rand1,
      dice2: rand2,
      dice_animation: "dice-animation"
    });
  }

  // Animation and button text change, after button press (for two seconds).
  buttonDisabledTime() {
    this.setState({
      button_text: "Rolling...",
      button_status: true
    });
    this.genRandom();
    setTimeout(() => {
      this.setState({
        button_text: "Roll Dice!",
        button_status: false,
        dice_animation: ""
      });
    }, 2000);
  }

  render() {
    return (
      <div className="RollDice">
        <Die
          rand1={this.state.dice1}
          rand2={this.state.dice2}
          animation={this.state.dice_animation}
        />
        <button
          onClick={(this.genRandom, this.buttonDisabledTime)}
          disabled={this.state.button_status}
        >
          {this.state.button_text}
        </button>
      </div>
    );
  }
}

export default RollDice;
