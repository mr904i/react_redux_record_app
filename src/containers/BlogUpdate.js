import React, {Component} from 'react';
import { connect } from 'react-redux';
import {article_update} from '../actions/blogActions';
import Header from './Header'

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
                <h3>記事投稿</h3>
                
                <div>
                    <label>Title</label>
                    <input 
                        value = {this.state.title}
                        onChange= {this.handleTitleInput.bind(this)}
                        placeholder="Title"
                    />
                </div>
                <div>
                    <label>Article</label>
                    <input
                        value = {this.state.article}
                        onChange= {this.handleArticleInput.bind(this)}
                        placeholder="Article"
                    />
                </div>
                <button onClick={this.clickUpdate.bind(this)}>Update Article</button>
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