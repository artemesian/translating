import React,{Component} from "react";
import Aux from "../hoc/Aux.js";
import "./Play.css";

class Play extends Component{
	constructor(){
		super();
		this.state = {
			start : "no",
			count : 0,
			questions : [],
      question : "",
      answer:[]
		}
	}
	choiceQuestion(){
		let tempQuestions = this.state.questions;
		let returnQuestion = tempQuestions.splice(Math.floor(Math.random()*(tempQuestions.length-1)),1)
		this.setState({questions : tempQuestions})
		return returnQuestion
	}
	startQuiz(choice){
		this.setState({start:"started"},()=>{
		this.Timer = setInterval(()=>
		 	this.setTimer()
		,500)
		})
	}
	setTimer(){
		let counter = this.state.count+1;
		this.setState({count : counter},()=>{
			if (this.state.count === 11) {
				let answer = this.state.answer;
				answer.push(document.querySelector('#play-answer').value);
				document.querySelector('#play-answer').value = "";
				this.setState({answer:answer})
				if(this.state.questions.length === 0){
					clearInterval(this.Timer)
					this.setState({count : 0},()=>
					 this.setState({start : "score"})
					)
				}
				this.setState({count : 0},()=>{
					this.setState({question:this.choiceQuestion()})
				})
			}
		})	
	}

  componentWillUnmount(){
		clearInterval(this.Timer)
	}
	render(){
		return (
			<div id="play-wrapper">
				{(this.state.start ==="started")? null :<button id="back-to-menu" onClick={()=>this.props.setOption(null)}>&#9668;</button>}
				<span id="timer">{this.state.count}</span>
				<div id="play-container">
					<div id="play-block-intro-question">
					{(this.state.start==="started")?
						<p>{(this.state.question)? this.state.question : <span id="get-ready">Get Ready! <span role="img" aria-label="timer">⏳</span></span>}</p>
					:	(this.state.start==="score")?<p>Finish!! 
							<button id="show-result" onClick={this.state.showResult}>Show Result</button>
						</p>
						:<p style={{fontSize:"6vw"}}>Test Your Ability Now!!</p>
					}
					</div>
					<div id="play-from-to">
						{(this.state.start === "no")?
								<button onClick={()=>this.startQuiz("started")}>Start</button>
						:(this.state.start ==="score")?null:
							<Aux>
								<input type="text" placeholder="Answer here!..." id="play-answer" />
							</Aux>
						}		
					</div>
				</div>
							{console.log(this.state)}
			</div>
		)
	}
}

export default Play;