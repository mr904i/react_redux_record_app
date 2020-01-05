import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect} from 'react-router-dom';

const PrivateRoute = ({ component, ...rest }) => {
    return (
        <Route {...rest} exact
            render = {(props) => (
                localStorage.getItem('token') ? (
                    <div>
                    {React.createElement(component, props)}
                    </div>
                ) :
                (
                    <Redirect
                        to={{
                            pathname: '/',
                            state: { from: props.location }
                        }}
                    />
                )
            )}
        />
    )
}

const mapStateToProps = (state) => {
    return{
        token: state.auth.token,
    }
}
  
export default connect(mapStateToProps, null)(PrivateRoute)
  