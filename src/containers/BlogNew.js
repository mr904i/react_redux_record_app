import React, {Component} from 'react';
import { connect } from 'react-redux';
import {article_create} from '../actions/blogActions';
import Header from './Header'

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
                <h3>記事投稿</h3>
                <div>
                    <label>Title</label>
                    <input value={this.state.title}
                        onChange= {this.handleTitleInput.bind(this)}
                        placeholder="Title"
                    />
                </div>
                <div>
                    <label>Article</label>
                    <input value={this.state.article}
                        onChange= {this.handleArticleInput.bind(this)}
                        placeholder="Article"
                    />
                </div>
                <button onClick={this.clickPost.bind(this)}>Create Article</button>
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