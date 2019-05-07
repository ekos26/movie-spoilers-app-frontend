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
      <div className="ui container">
      <div className="ui center aligned grid">
        <div className="six wide column">
        <div className="ui container">
          <h1 className="ui huge header">
            <img className="image" src="https://cdn4.iconfinder.com/data/icons/eldorado-multimedia/40/movie_1-256.png" alt="" />
            Please sign up
          </h1>
        <form className="ui large form" onSubmit={this.submitHandler}>
          <div className="ui stacked segment">
            <div className="field">
              <div className="ui input">
                <div className="ui left icon input">
                <i className="user icon"></i>
                <input type="text" placeholder="Username" name="username" value={this.state.username} onChange={this.changeHandler} />
              </div>
            </div>
            </div>
            <div className="field">
              <div className="ui input">
                <div className="ui left icon input">
                  <i className="lock icon"></i>
                <input type="password" placeholder="Password" name="password" value={this.state.password} onChange={this.changeHandler} />
              </div>
            </div>
            </div>
            <div className="field">
              <div className="ui input">
                <div className="ui left icon input">
                  <i className="user circle icon"></i>
                <input type="text" placeholder="Full name" name="fullname" value={this.state.fullname} onChange={this.changeHandler} />
              </div>
            </div>
            </div>
              <input className="ui fluid large purple button" type="submit" value="Signup" />
              </div>
        </form>
      </div>
      </div>
    </div>
  </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    signmeUp: (user) => dispatch(signmeUp(user))
  }
}

export default connect(null, mapDispatchToProps)(Signup);
