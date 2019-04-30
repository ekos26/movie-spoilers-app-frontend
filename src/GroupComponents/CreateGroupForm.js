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
      <form onSubmit={this.submitHandler}>
        <input type="text" placeholder="Group Name" name="name" value={this.state.name} onChange={this.changeHandler}/>
        <input type="submit" value="Create new group" />
      </form>
    )
  }
}

const mapStateToProps = state => {
  return {
    groups: state.groups
  }
}

export default connect(mapStateToProps, {createGroup})(CreateGroupForm);
