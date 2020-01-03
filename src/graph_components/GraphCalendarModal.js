import React, { Component } from 'react';
import Modal from 'react-modal';
import GraphCalendar from './GraphCalendar'
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
class GraphCalendarModal extends Component {
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
    this.subtitle.style.color = '#6c757d';
    this.subtitle.style.textAlign = 'center';
  }
  closeModal() {
    this.setState({modalIsOpen: false});
  }
  render() {
    return (
      <div>
        <Button variant="secondary" onClick={this.openModal}>SELECT DAY</Button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Graph Calendar Modal"
        >
          <h2 ref={subtitle => this.subtitle = subtitle}>SELECT DAY</h2>
          <GraphCalendar onSelectDate={this.props.onSelectDate} date = {this.props.date}/>
            <Button variant="secondary" onClick={this.closeModal} style={{marginTop: "5px"}}>SELECT</Button>
        </Modal>
      </div>
    );
  }
}
export default GraphCalendarModal;