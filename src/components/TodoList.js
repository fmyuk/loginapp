import React, { Component } from "react";
import auth from "../modules/auth";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    }
  }

  componentDidMount() {
    const token = auth.getToken();

    fetch("http://localhost:3000/api/todos", {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${token}`
      }
        .then((res) => res.json())
        .then((data) => {
          if (data.todos) {
            this.setState({ todos: data.todos });
          } else {
            alert(data.message);
        }
        })
      .catch((err) => console.log(err))
    })
  }

  logout() {
    auth.logout();
    this.props.history.push("/");
  }

  render() {
    return (
      <div>
        <button onClick={this.logout.bind(this)}>Logout</button>
        <br />
        <ul>
          {this.state.todos.map((todo) => {
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

export default TodoList;
