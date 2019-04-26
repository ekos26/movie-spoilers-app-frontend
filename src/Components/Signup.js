import React, {Component} from 'react'
import { signmeUp } from '../actions/index';
import { connect } from 'react-redux';

class Signup extends Component {

  state ={
    username: '',
    password: '',
    fullname: ''
  };

  changeHandler = (event) => {
    this.setState({[event.target.name]: event.target.value})
  };

  submitHandler = (event) => {
    event.preventDefault();
    this.setState({
      username: '',
      password:'',
      fullname:''})
    this.props.signmeUp(this.state)
  };

  render () {
    return (
        <form onSubmit={this.submitHandler}>
          <input type="text" placeholder="Username" name="username" value={this.state.username} onChange={this.changeHandler} />
          <input type="password" placeholder="Password" name="password" value={this.state.password} onChange={this.changeHandler} />
          <input type="text" placeholder="Full name" name="fullname" value={this.state.fullname} onChange={this.changeHandler} />
          <input type="submit" value="Signup" />
        </form>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    signmeUp: (user) => dispatch(signmeUp(user))
  }
}

export default connect(null, mapDispatchToProps)(Signup);
