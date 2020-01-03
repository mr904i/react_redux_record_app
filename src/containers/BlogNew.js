import React, {Component} from 'react';
import { connect } from 'react-redux';
import {article_create} from '../actions/blogActions';
import {Form, Button} from 'react-bootstrap';
import Header from './Header'
import '../style/article-form.scss'

class BlogNew extends Component {
    constructor(props){
        super(props);
        this.state = {
            title: "",
            article:""
        }
    }
    
    handleTitleInput(e){
        this.setState({title: e.target.value})
    }

    handleArticleInput(e){
        this.setState({article: e.target.value})
    }

    clickPost(){
        this.props.article_create(this.state.title, this.state.article, this.props.user);
    }

    render(){
        return(
            <div>
                <Header/>
                <div className="article-form">
                    <h3>Create Article</h3>
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
                    <Button
                        variant="primary"
                        onClick={this.clickPost.bind(this)}
                        style = {(this.state.title.length===0 || this.state.article.length===0) ? {pointerEvents: 'none'} : {pointerEvents: 'auto'}}
                    >
                            Create Article
                    </Button>
                </div>
            </div>
        )
    }
}

//storeから取り出し
const mapStateToProps = (state) => {
    return{
        user: state.auth.user,
        token: state.auth.token,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        article_create: (title, article, user) => dispatch(article_create(title, article, user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BlogNew)