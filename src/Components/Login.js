import React, {Component} from 'react';
import { login } from '../actions/index';
import { connect } from 'react-redux';


class Login extends Component {

  state = {
    username: '',
    password: ''
  };

  changeHandler = (event) => {
    this.setState({[event.target.name]: event.target.value})
  };

  submitHandler = (event) => {
    event.preventDefault();
    this.setState({
      username: '',
      password:''
    })
    fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {
        'Accepts': 'application/json',
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        user: this.state
      })
    })
      .then(res => res.json())
      .then(data => {
        localStorage.setItem('token', data.token)
        this.props.login(data.user)
      })
  };

  render () {
    return (
        <form onSubmit={this.submitHandler}>
          <input type="text" placeholder="Username" name="username" value={this.state.username} onChange={this.changeHandler} />
          <input type="password" placeholder="Password" name="password" value={this.state.password} onChange={this.changeHandler} />
          <input type="submit" value="Login" />
        </form>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps, { login } )(Login);
