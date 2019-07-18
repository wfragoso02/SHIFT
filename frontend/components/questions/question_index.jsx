import React from 'react';
import { withRouter } from 'react-router-dom'
import Header from '../header';
import QuestionShow from './question_show';

class QuestionIndex extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      email: "",
      test_case: Array(10).fill(),
      temp: Array(10).fill(0),

    }
    this.handleChange =  this.handleChange.bind(this);
    this.handleSubmit =  this.handleSubmit.bind(this);
    this.answerQuestion = this.answerQuestion.bind(this);
    this.updateDimension = this.updateDimension.bind(this);
    this.updateUser = this.updateUser.bind(this);
  }
  componentDidMount(){
    this.props.fetchQuestions()
  }

  updateUser(idx, testCaseValue, dimensionValue){
    this.answerQuestion(idx, testCaseValue);
    this.updateDimension(idx, dimensionValue);
  }

  answerQuestion(idx, testCaseValue){
    let state = Object.assign(this.state);
    state["test_case"][idx] = testCaseValue;
    this.setState(state)
  }

  updateDimension(idx, dimensionValue){
    let state = Object.assign(this.state);
    state["temp"][idx] = dimensionValue;
    this.setState(state)
  }

  handleChange(e){
    this.setState({["email"]: e.target.value});
  }

  handleSubmit(e){
    e.preventDefault();

    const state = Object.assign(this.state);
    const arr = state["test_case"];
    let runStateChange = true;
    arr.forEach(key => {
      if(typeof key === "undefined") runStateChange = false;
    })
    if (state["email"].length < 1)runStateChange = false;
    if(runStateChange){
      state["EI"] = state["temp"][0] + state["temp"][3]+ state["temp"][8];
      state["SN"] = state["temp"][1] + state["temp"][4];
      state["TF"] = state["temp"][2] + state["temp"][6];
      state["JP"] = state["temp"][5] + state["temp"][7] + state["temp"][9];
      delete state['temp'];
      this.props.createUser(state).then((res) => {
        this.props.history.push(`/${res.user.id}`)})
    }else{
      let element1 = document.getElementById('error');
      let element2 = document.getElementsByClassName('show')
      if(element2.length === 0){
        element1.classList.toggle("show");
      }
    }
  }

  render(){
    const all_questions = this.props.questions.map((question,idx) => {
      return(
        <li key={question.id}>
          <QuestionShow 
          question={question} 
          idx={idx} 
          updateUser={this.updateUser}
          />
        </li>
      )
    });
    return(
      <div className="page">
        <Header />
        <div id="error"><h1 className="error-content">{`Please answer all the questions & Enter a valid email`}</h1></div>
        <div className="questions">
          {all_questions}
          <div className="email-input">
            <div className="email-input-content">
              <h1>Your Email</h1>
              <br/>
              <input type="text" name="email" value={this.state.email} onChange={this.handleChange}/>
            </div>
          </div>
          <div>
            <button className="submit-button"onClick={this.handleSubmit}>{`Save & Continue`}</button>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(QuestionIndex);