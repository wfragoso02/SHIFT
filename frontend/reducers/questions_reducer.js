import { RECEIVE_QUESTIONS } from "../actions/types";

export default (state = {}, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_QUESTIONS:
      return action.questions
    default:
      return state;
  }
};