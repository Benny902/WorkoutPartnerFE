import React from "react";


class Popup extends React.Component {
  render() {
    const google =
      "<iframe width='200%' height='500px' scrolling='no' src='https://chatforapp.herokuapp.com/' sandbox='allow-modals allow-forms allow-popups allow-scripts allow-same-origin'></iframe>";

    return (
      <div className="popup">
        <div className="popup_inner">
          <h1> {this.props.text} </h1>
          <div dangerouslySetInnerHTML={{ __html: google ? google : "" }} />
        </div>
      </div>
    );
  }
}

export default Popup;
