import React, {Component} from 'react';
import { connect } from 'react-redux';
import {article_update} from '../actions/blogActions';
import {Form, Button} from 'react-bootstrap';
import Header from './Header';
import '../style/article-form.scss';

class BlogUpdate extends Component {
    constructor(props){
        super(props);
        this.state = {
            id: this.props.location.state.article_id,
            title: this.props.location.state.article_title,
            article: this.props.location.state.article_article
        }
    }
    
    handleTitleInput(e){
        this.setState({title: e.target.value})
    }

    handleArticleInput(e){
        this.setState({article: e.target.value})
    }

    clickUpdate(){
        this.props.article_update(this.state.id, this.state.title, this.state.article, this.props.user);
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
        article_update: (id, title, article, user) => dispatch(article_update(id, title, article, user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BlogUpdate)