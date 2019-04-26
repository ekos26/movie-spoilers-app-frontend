import React, {Component} from 'react'

class Signup extends Component {

  // state ={
  //   username: '',
  //   password: '',
  //   fullname: ''
  // };
  //
  // changeHandler = (event) => {
  //   this.setState({[event.target.name]: event.target.value})
  // };
  //
  // submitHandler = (event) => {
  //   event.preventDefault();
  //   this.setState({name: '', password:'', fullname:''})
  //   this.props.submitUser(this.state)
  // };

  // onSubmit={this.submitHandler}

  // value={this.state.username} onChange={this.changeHandler}
  // value={this.state.password} onChange={this.changeHandler}
  // value={this.state.fullname} onChange={this.changeHandler}

  render () {
    return (
        <form>
          <input type="text" placeholder="Username" name="username"/>
          <input type="password" placeholder="Password" name="password"/>
          <input type="text" placeholder="Full name" name="fullname"/>
          <input type="submit" value="Signup" />
        </form>
    )
  }
}

export default Signup;
