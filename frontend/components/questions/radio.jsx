import React from 'react';

export default ({question, updateUser, idx}) => {
  const radios = Array(7).fill(1).map((_, i)=>{
    let value;
    if(i +  1 > 4){
      value = question.direction;
    }else if(i +  1 < 4){
      value = question.direction * -1
    }else{
      value = 0
    }

    return(
      <div key={`${question.id}-${i}`}>
        <input className="radio-buttons" type="radio" name={question.id} value={i + 1} onChange={() => updateUser(idx, i + 1, value)}/>
      </div>
      )
  })

  return(
    <div className="radio-show" >
      {radios}
    </div>
  )
}