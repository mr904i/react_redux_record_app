import React, {Component} from 'react';
import {ButtonToolbar, Button} from 'react-bootstrap'
import '../style/toppage.scss'

class TopPage extends Component {
    
    render(){
        return(
            <div className="menu-main">
                <h1>WELCOM</h1>
                <ButtonToolbar className="menu-main__Toolbar">
                    <Button variant="danger" href="/signup" className="menu-main__Toolbar-button__left">SignUp</Button>
                    <Button variant="primary" href="/signin" className="menu-main__Toolbar-button__right">SignIn</Button>
                </ButtonToolbar>
            </div>
        )
    }
}

export default TopPage