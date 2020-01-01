import React, {Component} from 'react';
import { connect } from 'react-redux';
import {login} from '../actions/authActions';
import {Form, Button} from 'react-bootstrap';
import Header from './Header'
import '../style/signin.scss'

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
                <Header/>
                <div className="signin-container">
                    <h3>SignIn</h3>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control 
                            type="email" 
                            placeholder="Enter email" 
                            value={this.state.email}
                            onChange= {this.handleEmailInput.bind(this)}
                        />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control 
                            type="password"
                            placeholder="Password"
                            value={this.state.password}
                            onChange= {this.handlePasswordInput.bind(this)}
                        />
                    </Form.Group>
                    <Button
                        variant="primary"
                        onClick={this.clickLogin.bind(this)}
                    >
                        SignIn
                    </Button>
                </div>
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