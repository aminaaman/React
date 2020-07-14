import React, { Component } from 'react';
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    var dataSet = [
      {
        question: "What is my score?",
        answers: [
          "40",
          "35"
        ],
        correct: 0
      },
      {
        question: "Who is the best teacher",
        answers: [
          "Meir agai",
          "others"
        ],
        correct: 0
      },
      {
        question: "What is 20*2?",
        answers: [
          "400",
          "40"
        ],
        correct: 1
      },
    ];
    this.state = {current:0, dataSet:dataSet, correct:0, incorrect:0, finish:false}
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick(choice) {
    if (choice === this.state.dataSet[this.state.current].correct) {
      this.setState({correct: this.state.correct + 1})
    } else {
      this.setState({incorrect: this.state.incorrect + 1})
    }
    
    if (this.state.current === 2) {
      this.setState({finish: true})
    } else {
         this.setState({current: this.state.current + 1}) 
    }
  }
  render() {
    return(
      <div>
        <Quiz handleClick={this.handleClick} dataSet={this.state.dataSet[this.state.current]} />
        <Score correct={this.state.correct} />
      </div>
    )
  }
  componentDidMount(){
    return(
      <div>
        <End finish={this.state.finish} />
      </div>
    )
  }
}

function Question(props) {
  var style = {
    color: "red",
  }
  return (
    <h1 style={style}>{props.dataSet.question}</h1>
  )
}
function Answer(props) {
  var style = {
    width: "100%",
    height: 50,
    color: "blue"
  }
  return(
    <div>
      <button style={style} onClick={() => props.handleClick(props.choice)}>{props.answer}</button>
    </div>
  )
}
function AnswerList(props) {
  var answers = []
  for (let i = 0; i < props.dataSet.answers.length; i++) {
    answers.push(<Answer choice={i} handleClick={props.handleClick} answer={props.dataSet.answers[i]} />)
  }
  return(
    <div>
      {answers}
    </div>
  )
}
function Quiz(props) {
  var style = {
    width: "25%",
    display: "block",
    textAlign: "center",
  }
  return(
    <div style={style}>
      <Question dataSet={props.dataSet} />
      <AnswerList dataSet={props.dataSet} handleClick={props.handleClick} />
    </div>
  )
}
function TotalCorrect(props) {
  var style = {
  display: "inline-block",
  }
  return(
    <h2 style={style}>Correct: {props.correct}</h2>
  )
}
function End(props){
  var style = {
    display: "inline-block",
    }
    return(
      <h2 style={style}>End: {props.finish}</h2>
    )
}
function Score(props){
  var style = {
    width: "100%",
    display: "block",
    textAlign:"left",
    float: "left",
  }
  return(
    <div style={style}>
      <TotalCorrect correct={props.correct} />
    </div>
  )
}

