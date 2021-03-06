import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Jumbotron, Button, ButtonToolbar} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import DeleteModalWindow from './DeleteModalMenu';
import Header from './Header'

class BlogShow extends Component {
    //詳細画面をクリックしてpropsで記事情報を受け取る
    constructor(props){
        super(props);
        this.state = {
            id: this.props.location.state.article_id,
            title: this.props.location.state.article_title,
            article: this.props.location.state.article_article,
            image: this.props.location.state.article_image,
            article_user: this.props.location.state.article_user,
            created_at: this.props.location.state.article_created_at
        }
    }
    render() {
        const btnstyle = {
            marginRight: "20px"
        };
        const linkstyle = {
            color: "white",
            textDecoration: "none",
        }
        return(
            <div>
                <Header/>
                <br />
                <Jumbotron>
                    <div>
                        <h1>{this.state.title}</h1>
                        <p>{this.state.article}</p>
                        {this.state.image && <img src={this.state.image} alt="article_img" />}
                        <p>{this.state.created_at}</p>
                    </div>
                    <ButtonToolbar>
                        {this.props.user.id === this.state.article_user && 
                            <DeleteModalWindow article_id={this.state.id}/>
                        }
                        {this.props.user.id === this.state.article_user &&
                            <Button variant="info" style={btnstyle}>
                                <Link to={{
                                    pathname: "/blog_update",
                                    state: {
                                        article_id: this.state.id,
                                        article_title: this.state.title,
                                        article_article: this.state.article,
                                        article_image: this.state.image
                                    }
                                }}
                                style={linkstyle}
                                >
                                    UPDATE
                                </Link>
                            </Button>
                        }
                    </ButtonToolbar>
                </Jumbotron>
            </div>
        );
    }
}

//storeから取り出し
const mapStateToProps = (state) => {
    return{
        user: state.auth.user,
        token: state.auth.token,
        articles: state.article.articles,
    }
}


export default connect(mapStateToProps, null)(BlogShow)