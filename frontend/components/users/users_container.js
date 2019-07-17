import { connect } from 'react-redux';
import UserShow from './user_show';

const msp = (state, ownProps) => {
  debugger
  return{
    user: state.entities.users[ownProps.match.params.userId]
  }
}

const mdp = dispatch => {
  return{
    fetchUser: (id) => dispatch(fetchUser(id))
  }
}

export default connect(msp, mdp)(UserShow);