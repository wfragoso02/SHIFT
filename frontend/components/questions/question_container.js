import { connect } from 'react-redux';
import QuestionIndex from './question_index';
import { fetchQuestions } from '../../actions/question_actions';
import { createUser } from '../../actions/user_actions';

const msp = (state) => {
  return{
    questions: Object.values(state.entities.questions) || {}
  }
}

const mdp = dispatch => {
  return{
    fetchQuestions: () => dispatch(fetchQuestions()),
    createUser: (payload) => dispatch(createUser(payload))
  }
}

export default connect(msp, mdp)(QuestionIndex);