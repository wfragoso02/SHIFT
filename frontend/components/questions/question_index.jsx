import React from 'react';

class QuestionIndex extends React.Component{
  componentDidMount(){
    this.props.fetchQuestions();
  }

  render(){
    const all_questions = this.props.questions.map(question => {
      return(
        <li key={question.id}>
          {question.question}
        </li>
      )
    });
    return(
      <div>
        {all_questions}
      </div>
    )
  }
}

export default QuestionIndex;