import React from 'react';

class UserShow extends React.Component{
  componentDidMount(){
    this.props.fetchUser(id);
  }

  componentDidUpdate(prevProps){
    if(prevProps.user.id !== this.props.user.id){
      this.props.fetchUser(id);
    }
  }

  render(){
    return(
      <div>
        Hello
      </div>
    )
  }
}

export default UserShow;