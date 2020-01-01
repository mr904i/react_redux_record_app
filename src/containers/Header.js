import React, {Component} from 'react';
import {connect} from 'react-redux';
import {logout} from '../actions/authActions';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router'
import PropTypes from 'prop-types'
import {Nav, Navbar} from 'react-bootstrap'


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
            <div>
                <Navbar bg="dark" variant="dark">
                    <Nav className="mr-auto">
                        {this.props.user.token === null && <Nav.Link href="/">Top</Nav.Link>}
                        {this.props.user.token && <Nav.Link href="/blog">List</Nav.Link>}
                        {this.props.user.token && <Nav.Link href="/blog_new">New Article</Nav.Link>}
                        {this.props.user.token && <Nav.Link href="/test">Show Graph</Nav.Link>}
                        {this.props.user.token && <Nav.Link onClick={this.clickLogout.bind(this)}>Sign Out</Nav.Link>}
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