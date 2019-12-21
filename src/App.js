import React, {Component} from 'react';
import { Route} from 'react-router-dom';
import BlogList from './containers/BlogList';
import BlogNew from './containers/BlogNew';
import BlogUpdate from './containers/BlogUpdate';
import BlogShow from './containers/BlogShow';
import SignUp from './containers/SignUp';
import Login from './containers/Login';
import TopPage from './components/TopPage';
import {ConnectedRouter} from 'connected-react-router';


class App extends Component {
  render(){
    return(
      <ConnectedRouter history={this.props.history}>
          <Route path="/" component={TopPage} exact={true} />
          <Route path="/signup" component={SignUp} />
          <Route path="/login" component={Login} />
          <Route path="/blog" component={BlogList} />
          <Route path="/blog_new" component={BlogNew} />
          <Route path="/blog_update" component={BlogUpdate} />
          <Route path="/blog_show" component={BlogShow} />
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
