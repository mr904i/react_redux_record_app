import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchArticle} from '../actions/blogActions';
import { Link } from 'react-router-dom';
import {Jumbotron, Button, ButtonToolbar} from 'react-bootstrap'
import DeleteModalWindow from './DeleteModalMenu'
import Header from './Header'
import '../style/bloglist.scss'
import StepsHour from '../graph_components/StepsHour';


class BlogList extends Component {
    componentDidMount(){
        this.props.fetchArticle(this.props.token);
    }

    render() {
        const createdatestyle = {
            color: "gray"
        };
        const btnstyle = {
            marginRight: "20px"
        };
        const linkstyle = {
            color: "white",
            textDecoration: "none",
        }
        return(
            <div className="blog-list">
                <Header/>
                <StepsHour/>
                <br />
                <ul>
                    {
                        this.props.articles.map((article) => {
                            return(
                                <div>
                                    <Jumbotron>
                                        <h1>{article.title}</h1>
                                        <p>{article.article}</p>
                                        <p style={createdatestyle}>{article.created_at}</p>
                                        <ButtonToolbar>
                                            <Button variant="primary" style={btnstyle}>
                                                <Link to={{
                                                        pathname: "/blog_show",
                                                        state: {
                                                            article_id: article.id,
                                                            article_title: article.title,
                                                            article_article: article.article,
                                                            article_user: article.user,
                                                            article_created_at: article.created_at
                                                        }
                                                    }}
                                                    style={linkstyle}
                                                    >
                                                        SHOW
                                                </Link>
                                            </Button>
                                            {this.props.user.id === article.user && <DeleteModalWindow article_id={article.id}/>}
                                            
                                            {this.props.user.id === article.user && 
                                                <Button variant="info" style={btnstyle}>
                                                    <Link to={{
                                                        pathname: "/blog_update",
                                                        state: {
                                                            article_id: article.id,
                                                            article_title: article.title,
                                                            article_article: article.article
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
                            )
                        })
                    }
                </ul>
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

const mapDispatchToProps = (dispatch) => {
    return{
        fetchArticle: (token) => dispatch(fetchArticle(token)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BlogList)