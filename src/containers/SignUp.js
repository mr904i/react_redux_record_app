import React, {Component} from 'react';
import { connect } from 'react-redux';
import {signup} from '../actions/authActions';
import BirthDayCalendarModal from './BirthDayCalendarModal';
import '../style/signup.scss';
import Header from './Header';

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
                <h3>Signup</h3>
                <div>
                    <label>Email</label>
                    <input value={this.state.email}
                        onChange= {this.handleEmailInput.bind(this)}
                        placeholder="Email"
                    />
                </div>
                <div>
                    <label>UserName</label>
                    <input value={this.state.username}
                        onChange= {this.handleUsernameInput.bind(this)}
                        placeholder="UserName"
                    />
                </div>
                <div>
                    <label>Your Birth Day</label>
                    < BirthDayCalendarModal selectDateOfBirth={this.selectDateOfBirth} date_of_birth = {this.state.date_of_birth}/>
                    <p>{this.state.date_of_birth&& this.state.date_of_birth.toLocaleDateString()}</p>
                </div>
                <div>
                    <label>Height</label>
                    <input value={this.state.height}
                        onChange= {this.handleHeightInput.bind(this)}
                        placeholder="Height"
                    />
                </div>
                <div>
                    <label>Weight</label>
                    <input value={this.state.weight}
                        onChange= {this.handleWeightInput.bind(this)}
                        placeholder="Weight"
                    />
                </div>
                <div>
                    <label>Password</label>
                    <input value={this.state.password}
                        onChange= {this.handlePasswordInput.bind(this)}
                        placeholder="Password"
                    />
                </div>
                <button onClick={this.clickSignUp.bind(this)}>Sign Up</button>
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