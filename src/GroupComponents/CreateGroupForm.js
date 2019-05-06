import React from 'react';
import { createGroup } from '../actions/index';
import { connect } from 'react-redux';

class CreateGroupForm extends React.Component {
  state = {
    name: ''
  };

  changeHandler = (event) => {
    this.setState({[event.target.name]: event.target.value});
  }

  submitHandler = (event) => {
    event.preventDefault();
    this.props.createGroup(this.state)
    this.setState({name:''})
  };

  render () {
    return (
      <div className="create form button">
      <div className="ui center aligned grid">
      <form className="ui form" onSubmit={this.submitHandler}>
        <div>
          <div className="field">
            <input type="text" placeholder="Group Name" name="name" value={this.state.name} onChange={this.changeHandler}/>
            <button className="ui animated blue button" type="submit">
              <div className="visible content">
                Submit new group
              </div>
              <div className="hidden content">
                <i aria-hidden="true" className="film icon"></i>
                <i aria-hidden="true" className="film icon"></i>
                <i aria-hidden="true" className="film icon"></i>
              </div>
            </button>
          </div>
        </div>
      </form>
      </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  console.log('mapstate', state);
  return {
    groups: state.groups
  }
}

export default connect(mapStateToProps, {createGroup})(CreateGroupForm);
