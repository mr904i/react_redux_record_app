import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchTodo} from '../actions/todoActions';
import {logout} from '../actions/authActions';

class TodoList extends Component {
    componentDidMount(){
        this.props.fetchTodo(this.props.token);
    }

    clickLogout(){
        this.props.logout();
        this.props.history.push('/');
    }

    render() {
        return(
            <div>
                <div>Hello {this.props.user.username}</div>
                <button onClick={this.clickLogout.bind(this)}>Logout</button>
                <br />
                <ul>
                    {
                        this.props.todos.map((todo) => {
                            return(
                                <div>
                                    <h1>{todo.title}</h1>
                                    <p>{todo.article}</p>
                                    <p>{todo.created_at}</p>
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
        todos: state.todo.todos,
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        fetchTodo: (token) => dispatch(fetchTodo(token)),
        logout: () => dispatch(logout())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)