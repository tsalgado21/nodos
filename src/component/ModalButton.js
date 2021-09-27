import React from "react";
import { AsbtractModal } from "./AbstractModal";

export class ModalButton extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      showAbstract : false,
      abstractText: props.abstract
    }
    this.toggleModal = this.toggleModal.bind(this)
  }
  
  toggleModal(){
    this.setState((state) => ({
      showAbstract : !state.showAbstract
    }))
  }

  render(){
    return (
      <div>
        <button className="modal-button" onClick={this.toggleModal}/>
        {this.state.showAbstract && 
          <AsbtractModal text={this.state.abstractText} onClick={this.toggleModal}/>
        }
      </div>
    );
  }  
}