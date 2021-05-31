import React, { Component } from "react";
import "../styles/quiz.css";
// import questions from "../resources/Question.json";
import axios from 'axios';
import {Link} from 'react-router-dom';

export default class Quiz extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      index_value: 0,
      datas:[],
      attempt: 0
    
    };
  }

  next = () => {
    if(this.state.index_value<9){
      this.setState({index_value: this.state.index_value + 1});
      // setTimeout(this.hide, 1000)
    }
    else{
      alert("Quiz Completed Quit Now")
    }
  };

  previous = () => {
    if(this.state.index_value === 0){
      alert("Please Start");
    }
    else if(this.state.index_value>0){
      this.setState({index_value:this.state.index_value-1 });
    }
  };

 

  verifyAns = (e)=>{
    let ans = e.target.value
    let btn = document.getElementById('ans')
    //console.log(this.state.datas[this.state.index_value].answer +" " +ans)
    this.props.isAttempt()
    if (this.state.datas[this.state.index_value].answer===ans)
    {   
        btn.innerText="Correct!"
        btn.style.backgroundColor='green'
        btn.style.display="block"
        btn.style.border="2px solid green"
        this.next()
        this.setState({
            correct : this.state.correct+1
        })
        this.props.checkCorrect()
    }
    else
    {
        btn.innerText = "Wrong!!!"
        btn.style.backgroundColor = 'red'
        btn.style.animation = 'hideIt 1s forwards'
        btn.style.display = "block"
        btn.style.border="2px solid red"
        this.next()
        this.setState({
          wrong: (this.state.attempt - this.state.correct) + 1
        })
        this.props.checkWrong()
    }
}

componentDidMount(){
   axios.get('https://my-json-server.typicode.com/Naveen132895/quiz-api/questions').then((res)=>{
        this.setState({
            datas:res.data
        })
    
   })
}

  render() {
    const isdata = this.state.datas.length
    const resultdata = this.state.datas[this.state.index_value]
    console.log(this.state.correct)
    return (
      <>
        <div className="quiz-parent">
          {isdata > 0 ?
          <div className="quiz-cont" id="quiz-cont">
            <div id="quiz-container">
              <div className="head">Question</div>
              <div className="question-num">
                <p id="numbers">{resultdata.id} of 10</p>
                <p id="question">{resultdata.question}</p>
              </div>
              <div className="options-container">
                <div className="option-cont-1">
                  <button className="button" onClick={this.verifyAns} id="opt-1" value={resultdata.options[0]}>{resultdata.options[0]}</button>
                  <button className="button" onClick={this.verifyAns} id="opt-2" value={resultdata.options[1]}>{resultdata.options[1]}</button>
                </div>
                <div className="option-cont-2">
                  <button className="button" onClick={this.verifyAns} id="opt-3" value={resultdata.options[2]}>{resultdata.options[2]}</button>
                  <button className="button" onClick={this.verifyAns} id="opt-4" value={resultdata.options[3]}>{resultdata.options[3]}</button>
                </div>
              </div>
            </div>
            <div className="controls">
              <button onClick={this.previous} id="prev">
                Previous
              </button>
              <button onClick={this.next} id="next">
                Next
              </button>
              <button id="quit"><Link to="/Result" className="link">
                Quit</Link>
              </button>
            </div>
            <div>
              <button id="ans"></button>
            </div>
          </div>
          :<div></div>}
        </div>
        
      </>
    );
  }
}