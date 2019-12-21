import React, {Component} from 'react';
import { Link } from 'react-router-dom';


class TopPage extends Component {
    
    render(){
        return(
            <div>
                <h1>TopPage</h1>
                <Link to="/signup" className="this_is_class_name">SignUp</Link>
                <br/>
                <Link to="/login" className="this_is_class_name">Login</Link>
            </div>
        )
    }
}

export default TopPage