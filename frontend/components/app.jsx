import React from 'react';
import { Switch, Route } from 'react-router-dom';
import QuestionsContainer from '../components/questions/question_container';

const App = () => (
  <div>
    <div>
      <Switch>
        {/* <Route exact path='/:userId' component={UserContainer}/> */}
        <Route exact path='/' component={QuestionsContainer}/>
      </Switch>
    </div>
  </div>
);

export default App;