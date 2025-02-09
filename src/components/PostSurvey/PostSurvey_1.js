import React, { Component } from 'react';
import { connect } from 'react-redux';
import './postSurvey.css';
//semantic-ui
import { Input, Button } from "semantic-ui-react";

class PostSurvey_1 extends Component {

  state = {}

  handleChangeFor = (propertyName) => (event) => {
    this.setState({
      ...this.state,
      [propertyName]: event.target.value
    });
  }

  handleClick = () => {
    let survey2 = Object.keys(this.state);
    if (survey2.length < 4) {
      alert("Please Answer All Questions")
    } else {
      this.props.dispatch({ type: `SET_POST_ANSWERS`, payload: this.state })
      this.props.history.push('/postsurvey2');
    }

  }

  render() {
    return (
      <>
      <div className="questions-wrapper"><br />
        <span className="survey-questions">
          1. How much of the Challenge did you complete?
        </span>
        <br />
        <Input
          onChange={this.handleChangeFor("challenge_completed")}
          className="semantic-radio"
          name="q1"
          type="radio"
          value="All"
        />
        All
        <br />
        <Input
          onChange={this.handleChangeFor("challenge_completed")}
          className="semantic-radio"
          name="q1"
          type="radio"
          value="3-4 weeks"
        />
        3-4 weeks
        <br />
        <Input
          onChange={this.handleChangeFor("challenge_completed")}
          className="semantic-radio"
          name="q1"
          type="radio"
          value="1-2 weeks"
        />
        1-2 weeks
        <br />
        <span className="survey-questions">
          2. Participating in the Challenge was easy to do.
        </span>
        <br />
        <Input
          onChange={this.handleChangeFor("participation_was_easy")}
          className="semantic-radio"
          name="q2"
          type="radio"
          value="Agree"
        />
        Agree
        <br />
        <Input
          onChange={this.handleChangeFor("participation_was_easy")}
          className="semantic-radio"
          name="q2"
          type="radio"
          value="Neutral"
        />
        Neutral
        <br />
        <Input
          onChange={this.handleChangeFor("participation_was_easy")}
          className="semantic-radio"
          name="q2"
          type="radio"
          value="Disagree"
        />
        Disagree
        <br />
        <span className="survey-questions">
          3. I learned something new from participating in the Challenge.
        </span>
        <br />
        <Input
          onChange={this.handleChangeFor("learned_something_new")}
          className="semantic-radio"
          name="q3"
          type="radio"
          value="Agree"
        />
        Agree
        <br />
        <Input
          onChange={this.handleChangeFor("learned_something_new")}
          className="semantic-radio"
          name="q3"
          type="radio"
          value="Neutral"
        />
        Neutral
        <br />
        <Input
          onChange={this.handleChangeFor("learned_something_new")}
          className="semantic-radio"
          name="q3"
          type="radio"
          value="Disagree"
        />
        Disagree
        <br />
        <span className="survey-questions">
          4.I would encourage another coach I know to do the Challenge.
        </span>
        <br />
        <Input
          onChange={this.handleChangeFor("would_encourage")}
          className="semantic-radio"
          name="q4"
          type="radio"
          value="Agree"
        />
        Agree
        <br />
        <Input
          onChange={this.handleChangeFor("would_encourage")}
          className="semantic-radio"
          name="q4"
          type="radio"
          value="Neutral"
        />
        Neutral
        <br />
        <Input
          onChange={this.handleChangeFor("would_encourage")}
          className="semantic-radio"
          name="q4"
          type="radio"
          value="Disagree"
        />
        Disagree
        <br /><br />
      </div>

      <div className="bottomDiv">
        <Button onClick={this.handleClick}>Next</Button>
      </div>
      </>
    );
  }
}

const mapStateToProps = (reduxState) => ({
  reduxState,
})

export default connect(mapStateToProps)(PostSurvey_1);

