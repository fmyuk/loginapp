import React, { Component } from "react";
import auth from "../modules/auth";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    }
  }

  handleEmailInput(e) {
    this.setState({ email: e.target.value });
  }

  handlePasswordInput(e) {
    this.setState({ password: e.target.value });
  }

  login() {
    fetch("http://localhost:3000/api/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password
      })
    })
    .then((res) => res.json())
        .then((data) => {
          if (data.token) {
            auth.login(data.token);
            this.props.history.push("/todos");
          } else {
            alert(data.message);
        }
        })
      .catch((err) => console.log(err))
  }

  render() {
    return (
      <div>
        <h3>login</h3>
        <div>
          <label>Email</label>
          <input value={this.state.email}
            onChange={this.handleEmailInput.bind(this)}
            placeholder="Email"
          />
        </div>
        <div>
          <label>Password</label>
          <input value={this.state.password}
            onChange={this.handlePasswordInput.bind(this)}
            placeholder="Password"/>
        </div>
        <button onClick={this.login.bind(this)}>Login</button>
      </div>
    )
  }
}

export default Login;
