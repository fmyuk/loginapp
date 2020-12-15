import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchTodo } from "../actions/todoActions";
import { logout } from "../actions/authActions";

class TodoList extends Component {
  componentDidMount() {
    this.props.fetchTodo(this.props.token);
  }

  clickLogout() {
    this.props.logout();
    this.props.history.push("/");
  }

  render() {
    return (
      <div>
        <button onClick={this.logout.bind(this)}>Logout</button>
        <br />
        <ul>
          {this.props.todos.map((todo) => {
            return (
              <li key={todo.id}>
                {todo.text}
              </li>
            )
          })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    token: state.auth.token,
    todos: state.todo.todos
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchTodo: (token) => dispatch(fetchTodo(token)),
    logout: () => dispatch(logout())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
