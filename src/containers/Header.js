import React, {Component} from 'react';
import {connect} from 'react-redux';
import {logout} from '../actions/authActions';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router'
import PropTypes from 'prop-types'
import {Nav, Navbar} from 'react-bootstrap'
import '../style/header.scss'


class BlogList extends Component {

    clickLogout(){
        this.props.logout();
        this.props.history.push('/');
    }

    static propTypes = {
        match: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired
    }

    render() {
        return(
            <div className="header">
                <Navbar bg="dark" variant="dark" className="header-navbar">
                    <Nav className="mr-auto header-navbar-nav">
                        {this.props.user.token === null && 
                            <Nav.Link className="mr-auto header-navbar-nav-navlink" href="/">
                                Top
                            </Nav.Link>
                        }
                        {this.props.user.token && 
                            <Nav.Link className="mr-auto header-navbar-nav-navlink">
                                <Link to ="/blog" className="header-navbar-nav-navlink__tag">
                                    Home
                                </Link>
                            </Nav.Link>
                        }
                        {this.props.user.token && 
                            <Nav.Link className="mr-auto header-navbar-nav-navlink">
                                <Link to='/blog_new' className="header-navbar-nav-navlink__tag">
                                    New Article
                                </Link>
                            </Nav.Link>
                        }
                        {this.props.user.token && 
                            <Nav.Link className="mr-auto header-navbar-nav-navlink">
                                <Link to = '/graph' className="header-navbar-nav-navlink__tag">
                                    Show Graph
                                </Link>
                            </Nav.Link>
                        }
                        {this.props.user.token && 
                            <Nav.Link className="mr-auto header-navbar-nav-navlink" onClick={this.clickLogout.bind(this)}>
                                Sign Out
                            </Nav.Link>
                        }
                    </Nav>
                </Navbar>
            </div>
        );
    }
}

//storeから取り出し
const mapStateToProps = (state) => {
    return{
        user: state.auth,
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        logout: () => dispatch(logout())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(BlogList))