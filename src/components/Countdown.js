import React, { Component } from "react";
import NotificationSound from "./notification-sound.mp3";
const delay = ms => new Promise(res => setTimeout(res, ms));
class Countdown extends Component {
  state = {
    timerOn: false,
    timerStart: 0,
    timerTime: 0
  };

  startTimer = () => {
    this.setState({
      timerOn: true,
      timerTime: this.state.timerTime,
      timerStart: this.state.timerTime
    });
    this.timer = setInterval(async () => {
      const newTime = this.state.timerTime - 10;
      if (newTime >= 0) {
        this.setState({
          timerTime: newTime
        });
      } else {
        clearInterval(this.timer);
        this.setState({ timerOn: false });
        (new Audio(NotificationSound)).play()
        await delay(1000);
        alert("Rest Countdown Ended");
        
      }
    }, 10);
  };

  stopTimer = () => {
    clearInterval(this.timer);
    this.setState({ timerOn: false });
  };
  resetTimer = () => {
    if (this.state.timerOn === false) {
      this.setState({
        timerTime: this.state.timerStart
      });
    }
  };

  adjustTimer = input => {
    const { timerTime, timerOn } = this.state;
    if (!timerOn) {
      if (input === "incHours" && timerTime + 3600000 < 216000000) {
        this.setState({ timerTime: timerTime + 3600000 });
      } else if (input === "decHours" && timerTime - 3600000 >= 0) {
        this.setState({ timerTime: timerTime - 3600000 });
      } else if (input === "incMinutes" && timerTime + 60000 < 216000000) {
        this.setState({ timerTime: timerTime + 60000 });
      } else if (input === "decMinutes" && timerTime - 60000 >= 0) {
        this.setState({ timerTime: timerTime - 60000 });
      } else if (input === "incSeconds" && timerTime + 1000 < 216000000) {
        this.setState({ timerTime: timerTime + 5000 });
      } else if (input === "decSeconds" && timerTime - 1000 >= 0) {
        this.setState({ timerTime: timerTime - 5000 });
      }
    }
  };

  render() {
    const { timerTime, timerStart, timerOn } = this.state;
    let seconds = ("0" + (Math.floor((timerTime / 1000) % 60) % 60)).slice(-2);
    let minutes = ("0" + Math.floor((timerTime / 60000) % 60)).slice(-2);

    return (
      <div style={{textAlign: 'center'}} className="Countdown">
        {/*<div style={{fontSize: "10px"}} className="Countdown-label">(Minutes : Seconds)</div>*/}
        <b>Rest&nbsp;Countdown</b>
        <div className="Countdown-display">
          <button className="arrows" style={{fontSize: "14px"}} onClick={() => this.adjustTimer("incMinutes")}>
          🔼
          </button>
          
          <button className="arrows" style={{fontSize: "14px"}} onClick={() => this.adjustTimer("incSeconds")}>
          🔼
          </button>

          <div style={{fontSize: "22px", color:'red',padding:'0px'}} className="Countdown-time">
            {minutes}:{seconds}
          </div>

          <button className="arrows" style={{fontSize: "14px"}} onClick={() => this.adjustTimer("decMinutes")}>
          🔽
          </button>
          <button className="arrows" style={{fontSize: "14px"}}onClick={() => this.adjustTimer("decSeconds")}>
          🔽
          </button>
        </div>

        {timerOn === false && (timerStart === 0 || timerTime === timerStart) && (
          <button className="Button-start" onClick={this.startTimer}>
            Start
          </button>
        )}
        {timerOn === true && timerTime >= 1000 && (
          <button className="Button-stop" onClick={this.stopTimer}>
            Stop
          </button>
        )}
        {timerOn === false &&
          (timerStart !== 0 && timerStart !== timerTime && timerTime !== 0) && (
            <button className="Button-start" onClick={this.startTimer}>
              Resume
            </button>
          )}

        {(timerOn === false || timerTime < 1000) &&
          (timerStart !== timerTime && timerStart > 0) && (
            <button className="Button-reset" onClick={this.resetTimer}>
              Reset
            </button>
          )}
      </div>
    );
  }
}

export default Countdown;