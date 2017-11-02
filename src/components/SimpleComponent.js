// Code SimpleComponentHere Here
import React, { Component } from 'react';

export default class SimpleComponent extends Component {
  state = {
    mood: "happy"
  }

  handleClick = () => {
    let newMood;
    this.state.mood === "happy" ? newMood = "sad" : newMood = "happy"
    this.setState({
      mood: newMood
    })
  }

  render() {
    return (
      <div onClick={this.handleClick}>{this.state.mood}</div>
    )
  }
}
