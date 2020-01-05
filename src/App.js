import React, {Component} from 'react';
import { Route, Switch} from 'react-router-dom';
import BlogList from './containers/BlogList';
import BlogNew from './containers/BlogNew';
import BlogUpdate from './containers/BlogUpdate';
import BlogShow from './containers/BlogShow';
import SignUp from './containers/SignUp';
import Login from './containers/Login';
import TopPage from './components/TopPage';
import Graph from './graph_components/Graph';
import {ConnectedRouter} from 'connected-react-router';
import PrivateRoute from './route/PrivateRoute';


class App extends Component {
  render(){
    return(
      <ConnectedRouter history={this.props.history}>
        <Switch>
          <Route path="/" component={TopPage} exact={true} />
          <Route path="/signup" component={SignUp} />
          <Route path="/signin" component={Login} />
          <PrivateRoute path="/blog" component={BlogList} />
          <PrivateRoute path="/blog_new" component={BlogNew} />
          <PrivateRoute path="/blog_update" component={BlogUpdate} />
          <PrivateRoute path="/blog_show" component={BlogShow} />
          <PrivateRoute path="/graph" component={Graph} />
        </Switch>
      </ConnectedRouter>  
    );
  }
}

export default App;
