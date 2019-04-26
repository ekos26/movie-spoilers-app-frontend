import React, {Component} from 'react'

class Login extends Component {

  // state ={
  //   username: '',
  //   password: ''
  // };
  //
  // changeHandler = (event) => {
  //   this.setState({[event.target.name]: event.target.value})
  // };
  //
  // submitHandler = (event) => {
  //   event.preventDefault();
  //   this.setState({name: '', password:''})
  //   this.props.loginUser(this.state)
  // };

// <form onSubmit={this.submitHandler}>
// value={this.state.username} onChange={this.changeHandler}
// value={this.state.password} onChange={this.changeHandler}

  render () {
    return (
        <form>
          <input type="text" placeholder="Username" name="username" />
          <input type="password" placeholder="Password" name="password" />
          <input type="submit" value="Login" />
        </form>
    )
  }
}

export default Login;
