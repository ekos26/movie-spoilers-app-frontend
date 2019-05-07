import React, {Component} from 'react';
import { login } from '../actions/index';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';


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
        this.props.history.push("/groups")
      })
  };

  render () {
    return (
      <div className="ui container">
      <div className="ui center aligned grid">
        <div className="six wide column">
          <div className="ui container">
        <h1 className="ui blue center aligned header">
          <img className="image" src="https://cdn4.iconfinder.com/data/icons/eldorado-multimedia/40/movie_1-256.png" alt="" />
          Login to your account
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
                <input className="ui fluid large purple button" type="submit" value="Login" />

            </div>
          </form>
          <div className="ui message">
          <p>Welcome back!</p>
          </div>
          </div>
        </div>
      </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

export default withRouter(connect(mapStateToProps, { login } )(Login));
