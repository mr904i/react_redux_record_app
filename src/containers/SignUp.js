import React, {Component} from 'react';
import { connect } from 'react-redux';
import {signup} from '../actions/authActions';
import BirthDayCalendarModal from './BirthDayCalendarModal';
import '../style/signup.scss';
import Header from './Header';
import {Form, Button} from 'react-bootstrap';

class Signup extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: "",
            username: "",
            date_of_birth: "",
            height: "",
            weight: "",
            password:"",
        }
    }
    
    handleEmailInput(e){
        this.setState({email: e.target.value})
    }

    handleUsernameInput(e){
        this.setState({username: e.target.value})
    }

    selectDateOfBirth = (date_of_birth) => {
        this.setState({date_of_birth: date_of_birth})
    }

    handleHeightInput(e){
        this.setState({height: e.target.value})
    }

    handleWeightInput(e){
        this.setState({weight: e.target.value})
    }

    handlePasswordInput(e){
        this.setState({password: e.target.value})
    }

    clickSignUp(){
        this.props.signup(this.state.email, this.state.username, this.state.date_of_birth.toLocaleDateString().replace(/\//g, '-'), this.state.height, this.state.weight, this.state.password);
    }

    render(){
        return(
            <div>
                <Header/>
                <div className="signin-container">
                    <h3>Sign Up</h3>
                    <Form.Group controlId="Email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control 
                            type="email" 
                            placeholder="email" 
                            value={this.state.email}
                            onChange= {this.handleEmailInput.bind(this)}
                        />
                    </Form.Group>

                    <Form.Group controlId="UserName">
                        <Form.Label>User Name</Form.Label>
                        <Form.Control 
                            type="username" 
                            placeholder="username" 
                            value={this.state.username}
                            onChange= {this.handleUsernameInput.bind(this)}
                        />
                    </Form.Group>
                    <div>
                        <label>Your Birth Day</label>
                        <p>{this.state.date_of_birth&& this.state.date_of_birth.toLocaleDateString()}</p>
                        < BirthDayCalendarModal selectDateOfBirth={this.selectDateOfBirth} date_of_birth = {this.state.date_of_birth}/>
                    </div>
                    <Form.Group controlId="Height">
                        <Form.Label>Height</Form.Label>
                        <Form.Control 
                            type="height" 
                            placeholder="height you can only input number" 
                            value={this.state.height}
                            onChange= {this.handleHeightInput.bind(this)}
                        />
                    </Form.Group>
                    <Form.Group controlId="Weight">
                        <Form.Label>Weight</Form.Label>
                        <Form.Control 
                            type="weight" 
                            placeholder="weight you can only input number" 
                            value={this.state.weight}
                            onChange= {this.handleWeightInput.bind(this)}
                        />
                    </Form.Group>
                    <Form.Group controlId="Password">
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
                        onClick={this.clickSignUp.bind(this)}
                    >
                        SignUp
                    </Button>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signup: (email, username, date_of_birth, height, weight, password) => dispatch(signup(email, username, date_of_birth, height, weight, password))
    }
}

export default connect(null, mapDispatchToProps)(Signup)