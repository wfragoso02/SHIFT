import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';

class UserShow extends React.Component{
  componentDidMount(){
    this.props.fetchUser(this.props.match.params.userId);
  }

  componentDidUpdate(prevProps){
    if(prevProps.match.params.userId !== this.props.match.params.userId){
      this.props.fetchUser(this.props.match.params.userId);
    }
  }

  render(){
    if(!this.props.user)return null;
    return(
      <div className="user-show">
        <div className="user-show-left">
          <h1 className="user-show-top">Your Perspective</h1>
          <h3 className="user-show-bottom">{`Your Perspective Type is ${this.props.user.type.name}`}</h3>
        </div>
        <div className="user-show-right">
          <div className="user-show-right-content">
            <h1>Introversion (I)</h1>
            <h1>Sensing (S)</h1>
            <h1>Thinking (T)</h1>
            <h1>Judging (J)</h1>
          </div>
          <div>
          <ProgressBar>
            <ProgressBar bsPrefix={this.props.user.EI > 0 ? 'heavy' : 'none'} now={50} key={1} />
            <ProgressBar bsPrefix={this.props.user.EI >= 0 ? 'none' : 'heavy'} now={50} key={2} />
          </ProgressBar>
          <ProgressBar>
            <ProgressBar bsPrefix={this.props.user.SN > 0 ? 'heavy' : 'none'} now={50} key={1} />
            <ProgressBar bsPrefix={this.props.user.SN >= 0 ? 'none' : 'heavy'}  now={50} key={2} />
          </ProgressBar>
          <ProgressBar>
            <ProgressBar bsPrefix={this.props.user.TF > 0 ? 'heavy' : 'none'} now={50} key={1} />
            <ProgressBar bsPrefix={this.props.user.TF >= 0 ? 'none' : 'heavy'} now={50} key={2} />
          </ProgressBar>
          <ProgressBar>
            <ProgressBar bsPrefix={this.props.user.JP > 0 ? 'heavy' : 'none'} now={50} key={1} />
            <ProgressBar bsPrefix={this.props.user.JP >= 0 ? 'none' : 'heavy'} now={50} key={2} />
          </ProgressBar>
          
          </div>
          <div className="user-show-right-content">
            <h1>Extraversion (E)</h1>
            <h1>Intuition (N)</h1>
            <h1>Feeling (F)</h1>
            <h1>Perceiving (P)</h1>
          </div>
        </div>
      </div>
    )
  }
}

export default UserShow;