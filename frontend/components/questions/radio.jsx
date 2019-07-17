import React from 'react';

export default ({id, answerQuestion, idx}) => {
  const radios = Array(7).fill(1).map((_, i)=>{
    return(
      <div key={`${id}-${i}`}>
        <input className="radio-buttons" type="radio" name={id} value={i + 1} onChange={() => answerQuestion(idx, i + 1)}/>
      </div>
      )
  })

  return(
    <div className="radio-show" >
      {radios}
    </div>
  )
}