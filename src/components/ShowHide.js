import React from "react";
import Stopwatch from '../components/Stopwatch'
import Countdown from '../components/Countdown'

class ShowHide extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: false
    };
    this.toggleDisplay = this.toggleDisplay.bind(this);
  }
  toggleDisplay() {
    this.setState({
      display: !this.state.display
    });
  }
  render() {
    // change code below this line
    return (
      <div>
        <button className="button3" onClick={this.toggleDisplay}>⮟⌚⏰⮟</button>
        {this.state.display && 
        <div>

        <div style={{textAlign: 'center',display: 'flex', flexDirection: 'row',justifyContent:'space-evenly'}}>
      
      <Stopwatch/>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Countdown/>
      
      </div>

        </div>
        }
      </div>
    );
  }
}

export default ShowHide;