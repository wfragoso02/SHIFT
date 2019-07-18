import React from 'react';
import Radio from './radio';

export default ({ question, updateUser, idx }) => {
  return(
    <div className="question-show">
      <div className="question-show-content">
        <div className="question-show-content-description">
          {question.question}
        </div>
        <div className="radio-column">
          <h1 className="disagree">Disagree</h1>
          <div>
            <Radio question={question} idx={idx} updateUser={updateUser}/>
          </div>
          <h1 className="agree">Agree</h1>
        </div>
      </div>
    </div>
  )
}