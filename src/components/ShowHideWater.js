import React from "react";
import Water from './Waters'

class ShowHideWater extends React.Component {
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
        <button className="button3" onClick={this.toggleDisplay}>Water</button>
        {this.state.display && 
        <div>

        <div style={{textAlign: 'center',display: 'flex', flexDirection: 'row',justifyContent:'space-evenly'}}>
      
      <Water/>
      
      </div>

        </div>
        }
      </div>
    );
  }
}

export default ShowHideWater;