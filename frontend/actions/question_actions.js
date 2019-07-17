import * as QuestionApiUtil from '../util/question_api_util';
import { RECEIVE_QUESTIONS } from './types';

const receiveQuestions = (questions) => ({
  type: RECEIVE_QUESTIONS,
  questions
});

export const fetchQuestions = () => dispatch => (
  QuestionApiUtil.fetchQuestions().then(questions => dispatch(receiveQuestions(questions)))
)