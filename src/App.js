import React, {Component} from 'react';
import { Route} from 'react-router-dom';
import BlogList from './containers/BlogList';
import BlogNew from './containers/BlogNew';
import BlogUpdate from './containers/BlogUpdate';
import Login from './containers/Login';
import {ConnectedRouter} from 'connected-react-router';


class App extends Component {
  render(){
    return(
      <ConnectedRouter history={this.props.history}>
          <Route path="/" component={Login} exact={true} />
          <Route path="/blog" component={BlogList} />
          <Route path="/blog_new" component={BlogNew} />
          <Route path="/blog_update" component={BlogUpdate} />
      </ConnectedRouter>  
    );
  }
}

// const PrivateRoute = ({component: Component, ...rest}) => {
//   debugger;
//   const token = rest.token;
//   return(
//     <Route
//      {...rest}
//      render = {(props) => token !== null
//       ?<Component {...props} />
//       :<Redirect to = {{pathname: '/'}}/>}
//     />
//   )
// }

// const mapStateToProps = (state) => {
//   return{
//     token: state.auth.token
//   }
// }

export default App;
