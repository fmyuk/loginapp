import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import TodoList from "./components/TodoList";
import Login from "./components/Login";
import auth from "./modules/auth";

class App extends Component {
  render() {
    return (
      <div>
        <Route path="/" component={Login} exact={true} />
        <PrivateRoute path="/todos" compnent={TodoList} />
      </div>
    );
  }
}

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route {...rest}
      render={(props) => auth.isLoggedIn() === true
        ? <Component {...props} />
        : <Redirect to={{ pathname: "/" }} />} />
  )
}

export default App;
