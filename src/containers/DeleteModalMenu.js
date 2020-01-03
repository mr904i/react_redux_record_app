import React from 'react';
import { connect } from 'react-redux';
import {articleDelete} from '../actions/blogActions';
import Modal from 'react-modal';
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

Modal.setAppElement('#root') //任意のアプリを設定する　create-react-appなら#root
class DeleteModalWindow extends React.Component {
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
  
  clickDelete(){
    this.props.articleDelete(this.props.article_id);
    this.setState({modalIsOpen: false});
  }


  render() {
    return (
      <div>
        <Button variant="danger" onClick={this.openModal} style={{marginRight: "20px"}}>Delete</Button>
        <Modal
            isOpen={this.state.modalIsOpen}
            onAfterOpen={this.afterOpenModal}
            onRequestClose={this.closeModal}
            style={customStyles}
            contentLabel="Example Modal"
        >
            <h2 ref={subtitle => this.subtitle = subtitle}>Delete menu</h2>
            <div>Do you delete this article？</div>
            <button onClick={this.clickDelete.bind(this)}>Delete Article</button>
            <button onClick={this.closeModal}>close</button>
        </Modal>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
    return{
        articleDelete: (article_id) => dispatch(articleDelete(article_id))
    }
}

export default connect(null, mapDispatchToProps)(DeleteModalWindow);