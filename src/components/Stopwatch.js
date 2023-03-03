import React, { Component } from "react";


class Stopwatch extends Component {
  state = {
    timerOn: false,
    timerStart: 0,
    timerTime: 0
  };

  startTimer = () => {
    this.setState({
      timerOn: true,
      timerTime: this.state.timerTime,
      timerStart: Date.now() - this.state.timerTime
    });
    this.timer = setInterval(() => {
      this.setState({
        timerTime: Date.now() - this.state.timerStart
      });
    }, 10);
  };

  stopTimer = () => {
    this.setState({ timerOn: false });
    clearInterval(this.timer);
  };

  resetTimer = () => {
    this.setState({
      timerStart: 0,
      timerTime: 0
    });
  };

  render() {
    const { timerTime } = this.state;
    let seconds = ("0" + (Math.floor(timerTime / 1000) % 60)).slice(-2);
    let minutes = ("0" + (Math.floor(timerTime / 60000) % 60)).slice(-2);
    let hours = ("0" + Math.floor(timerTime / 3600000)).slice(-2);
    return (
      <div style={{textAlign: 'center'}}className="Stopwatch">
      <b>Total Workout Stopwatch</b>
        <div style={{fontSize: "1px"}}>&nbsp;</div>
        <div style={{fontSize: "25px" , color:'#4CAF50'}} className="Stopwatch-display">
          {hours}:{minutes}:{seconds}
        </div>
        <div style={{fontSize: "15px"}}>&nbsp;</div>
        {this.state.timerOn === false && this.state.timerTime === 0 && (
          <button className="Button-start" onClick={this.startTimer}>Start</button>
        )}
        {this.state.timerOn === true && (
          <button className="Button-stop" onClick={this.stopTimer}>Stop</button>
        )}
        {this.state.timerOn === false && this.state.timerTime > 0 && (
          <button className="Button-resume" onClick={this.startTimer}>Resume</button>
        )}
        {this.state.timerOn === false && this.state.timerTime > 0 && (
          <button className="Button-reset" onClick={this.resetTimer}>Reset</button>
        )}
      </div>
    );
  }
}

export default Stopwatch;