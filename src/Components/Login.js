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
    this.setState({username: '', password:''})
    this.props.login(this.state)
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

export default connect(null, { login} )(Login);
