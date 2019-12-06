import React, {Component} from 'react';

import { connect } from 'react-redux';

import {login} from '../actions/authActions'

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            email:"",
            password:""
        }
    }
    
    handleEmailInput(e){
        this.setState({email: e.target.value})
    }

    handlePasswordInput(e){
        this.setState({password: e.target.value})
    }

    clickLogin(){
        this.props.login(this.state.email, this.state.password);
    }

    render(){
        return(
            <div>
                <h3>Login</h3>
                <div>
                    <label>Email</label>
                    <input value={this.state.email}
                        onChange= {this.handleEmailInput.bind(this)}
                        placeholder="Email"
                    />
                </div>
                <div>
                    <label>Password</label>
                    <input value={this.state.password}
                        onChange= {this.handlePasswordInput.bind(this)}
                        placeholder="Password"
                    />
                </div>
                <button onClick={this.clickLogin.bind(this)}>Login</button>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        login: (email, password) => dispatch(login(email, password))
    }
}

export default connect(null, mapDispatchToProps)(Login)