import React, { Component } from 'react';
import Modal from 'react-modal';
import BirthDayCalendar from './BirthDayCalendar'
import {Button} from 'react-bootstrap'
const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
 }
};

Modal.setAppElement('#root') 
class BirthDayCalendarModal extends Component {
  constructor() {
    super();
    this.state = {
      modalIsOpen: false
    };
    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
  openModal() {
    this.setState({modalIsOpen: true});
  }
  afterOpenModal() {
    this.subtitle.style.color = '#f00';
  }
  closeModal() {
    this.setState({modalIsOpen: false});
  }
  render() {
    return (
      <div>
        <Button variant="secondary" onClick={this.openModal} style={{fontSize: "12px"}}>SELECT YOUR BIRTHDAY</Button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <h2 ref={subtitle => this.subtitle = subtitle}>SELECT YOUR BIRTH DAY</h2>
          <BirthDayCalendar selectDateOfBirth={this.props.selectDateOfBirth} date_of_birth = {this.props.date_of_birth}/>
          <div>Opend</div>
            <button onClick={this.closeModal}>CLOSE</button>
        </Modal>
      </div>
    );
  }
}
export default BirthDayCalendarModal;