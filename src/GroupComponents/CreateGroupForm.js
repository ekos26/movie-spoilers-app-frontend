import React from 'react';

class CreateGroupForm extends React.Component {
  state = {
    name: ''
  };

  changeHandler = (event) => {
    this.setState({[event.target.name]: event.target.value});
  }

  // submitHandler = (event) => {
  //   event.preventDefault();
  //   this.props.submitEventHandler(this.state)
  //   this.setState({name:''})
  // };

  render () {
    return (
      <form onSubmit={this.submitHandler}>
        <input type="text" placeholder="Group Name" name="name" value={this.state.name} onChange={this.changeHandler}/>
        <input type="submit" value="Create new group" />
      </form>
    )
  }
}

export default CreateGroupForm;
