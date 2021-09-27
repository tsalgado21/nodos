import React from "react";

export class AsbtractModal extends  React.Component {

  constructor(props) {
    super(props);
    this.state = {
      onClick : props.onClick,
      text: props.text
    }
  }
  
  render(){
    return(
      <div className="abstract-modal">          
        <div className="close-modal-button" onClick={this.state.onClick}>x</div>
        <div className="abstract-text">{this.state.text}</div>
      </div>
    );
  }
}