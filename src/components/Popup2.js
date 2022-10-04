import React from "react";


class Popup2 extends React.Component {
  render() {
    const google2 =
      "<iframe width='200%' height='500px' scrolling='no' src='https://chatforapp.herokuapp.com/chat.html?name=Guest&room=Public' sandbox='allow-modals allow-forms allow-popups allow-scripts allow-same-origin'></iframe>";

    return (
      <div className="popup2">
        <div className="popup_inner2">
          <h1> {this.props.text} </h1>
          <div dangerouslySetInnerHTML={{ __html: google2 ? google2 : "" }} />
        </div>
      </div>
    );
  }
}

export default Popup2;
