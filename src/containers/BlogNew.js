import React, {Component} from 'react';

import { connect } from 'react-redux';

import {ariticle_create} from '../actions/blogActions'

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
        this.props.ariticle_create(this.state.title, this.state.article, this.props.user);
    }

    render(){
        return(
            <div>
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
        ariticle_create: (title, article, user) => dispatch(ariticle_create(title, article, user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BlogNew)