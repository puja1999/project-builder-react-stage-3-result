import React, { Component } from "react";
import "../styles/result.css";
import { Link } from 'react-router-dom'
export default class ResultComponent extends Component {
  constructor(props){
    super(props)
  }

  render() {
    console.log(this.props);
    return (
      <div className="result-parent">
        <div className="result">
          <i class="fa fa-check-circle" aria-hidden="true"></i>
          <h1 className="result-heading">Result</h1>
        </div>
        <div className="result-cont">
          {this.props.correct*10<60 ?
          <p className="status">You need more practice !</p>
          :
          <p>Well Done</p>
          }
          <p className="score">Your Score: {this.props.correct*10}</p>
          
          <div className="main">
            <p>
              Total number of question:<span> 10</span>
            </p>
            <p>
              Number of attempted question:<span>{this.props.attempt}</span>
            </p>
            <p>
              Number of Correct Answers:<span> {this.props.correct}</span>
            </p>
            <p>
              Number of Wrong Answers:<span>{10-this.props.correct}</span>
            </p>
          </div>
        </div>
        <div className="btn-container">
          <button className="play"><Link to="/Quiz" className="link"> Play Again</Link></button>
          <button className="back"><Link to="/" className="link">Back to Home</Link></button>
        </div>
      </div>
    );
  }
}