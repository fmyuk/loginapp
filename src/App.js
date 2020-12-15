import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import TodoList from "./components/TodoList";
import Login from "./components/Login";
import { connect } from "react-redux";
import { ConnectedRouter } from "connected-react-router";

class App extends Component {
  render() {
    return (
      <ConnectedRouter history={this.props.history}>
        <>
          <Route path="/" component={Login} exact={true} />
          <PrivateRoute path="/todos" component={TodoList} token={this.props.token} />
        </>
      </ConnectedRouter>
    );
  }
}

const PrivateRoute = ({ component: Component, ...rest }) => {
  const token = rest.token;

  return (
    <Route {...rest}
      render={(props) => token !== null
        ? <Component {...props} />
        : <Redirect to={{ pathname: "/" }} />} />
  )
}

const mapStateToProps = (state) => {
  return {
    token: state.auth.token
  }
}

export default connect(mapStateToProps)(App);
