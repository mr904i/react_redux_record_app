import React, {Component} from 'react';
import {connect} from 'react-redux';
import {logout} from '../actions/authActions';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router'
import PropTypes from 'prop-types'


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
                {/* <div>Hello {this.props.user.username}</div> */}
                <Link to="/blog">TOP</Link>
                <button onClick={this.clickLogout.bind(this)}>Logout</button>
                <Link to="/blog_new">NEW ARTICLE</Link>
                <br />
                <Link to="/test">TEDT GRAPH</Link>
                <br />
            </div>
        );
    }
}

//storeから取り出し
const mapStateToProps = (state) => {
    return{
        user: state.auth.user,
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        logout: () => dispatch(logout())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(BlogList))