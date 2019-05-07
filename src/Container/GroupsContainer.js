import React from 'react';
import { connect } from 'react-redux';
import GroupCard from "../GroupComponents/GroupCard";
import CreateGroupForm from '../GroupComponents/CreateGroupForm';


class GroupsContainer extends React.Component {

  state = {
    clicked: false
  }

  handleClick = () => {
    this.setState({
      clicked: !this.state.clicked
    })
  }

  render() {
    console.log('in group container', this.props);
    let groups = this.props.groups.map(group => {
      return <GroupCard key={group.id} group={group} movies={group.movies}/>
    })


    return (
      <div>
        <button className="ui basic blue button" onClick={() => {
            this.handleClick()
          }}>Create Group</button>
        {this.state.clicked ? <CreateGroupForm group={this.props.group}/> : null}
        <div className="groups">
          {groups}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    groups: state.groups.groups
  }
}


export default connect(mapStateToProps)(GroupsContainer);
