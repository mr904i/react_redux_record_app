import React, {Component} from 'react';
import { connect } from 'react-redux';
import {article_update} from '../actions/blogActions';
import {Form, Button} from 'react-bootstrap';
import Header from './Header';
import '../style/article-form.scss';

const createObjectURL = (window.URL || window.webkitURL).createObjectURL || window.createObjectURL;

class BlogUpdate extends Component {
    constructor(props){
        super(props);
        this.state = {
            id: this.props.location.state.article_id,
            title: this.props.location.state.article_title,
            article: this.props.location.state.article_article,
            image_url: this.props.location.state.article_image,
            image: this.props.location.state.article_image
        }
    }
    
    handleTitleInput(e){
        this.setState({title: e.target.value})
    }

    handleArticleInput(e){
        this.setState({article: e.target.value})
    }
    handelChangeFile(e){
        let image_file = e.target.files;
        let image = image_file[0];
        let image_url = image_file.length===0 ? null:createObjectURL(image_file[0]);
        this.setState({image_url: image_url})
        this.setState({image: image})
    }
    handleDleleteImage(){
        this.setState({image: null})
        this.setState({image_url: null})
    }

    clickUpdate(){
        this.props.article_update(this.state.id, this.state.title, this.state.article, this.state.image,this.props.user);
    }

    render(){
        return(
            <div>
                <Header/>
                <div className="article-form">
                    <h3>Update Article</h3>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Title</Form.Label>
                        <Form.Control 
                            value={this.state.title}
                            onChange= {this.handleTitleInput.bind(this)}
                            placeholder="Title"
                        />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Article</Form.Label>
                        <Form.Control 
                            as="textarea"
                            rows="10" 
                            value={this.state.article}
                            onChange= {this.handleArticleInput.bind(this)}
                            placeholder="Article"
                        />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Image</Form.Label>
                        <input type="file" ref="file" onChange={this.handelChangeFile.bind(this)} />
                        {this.state.image_url && <Button variant="danger" onClick={this.handleDleleteImage.bind(this)}>Delete Image</Button>}
                        {this.state.image_url && <img src={this.state.image_url} alt="upload_img" />}
                    </Form.Group>
                    <Button
                        variant="primary"
                        onClick={this.clickUpdate.bind(this)}
                        style = {(this.state.title.length===0 || this.state.article.length===0) ? {pointerEvents: 'none'} : {pointerEvents: 'auto'}}
                    >
                        Update Article
                    </Button>
                </div>
            </div>
        )
    }
}

//storeから取り出し
const mapStateToProps = (state) => {
    return{
        user: state.auth.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        article_update: (id, title, article, image, user) => dispatch(article_update(id, title, article, image, user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BlogUpdate)