import React,{Component} from "react";
import Aux from "../hoc/Aux.js";
import ResultList from "../../components/ResultList/ResultList.js"
import "./Play.css";

class Play extends Component{
	constructor(){
		super();
		this.state = {
			start: "no",
			count: 0,
			questions: [],
			question: "",
			answer: []
		};
	}

	startQuiz(choice){
		if(choice === "started"){
			let closureSetTimer = this.setTimer().bind(this);
			this.setState({start:"started"},()=>{
			this.Timer = setInterval(()=>
				closureSetTimer()
			,1000)
			})
			fetch("https://warm-beach-09378.herokuapp.com/play",{
				method:"get",
				headers: {"Content-Type":"application/json"},
			})
			.then(response=>response.json())
			.then(translates=>{
				let newtranslate = translates.map((translate,i)=>(i%2 === 0)? [translate.translatede,translate.translatefr]:[translate.translatefr,translate.translatede])
				console.log(newtranslate)
				this.setState({questions:newtranslate})
			})
		}
		else{
			this.setState({
				start: "no",
				count: 0,
				questions: [],
				question: "",
				answer: []
			})
		}
	}
	setTimer(){
		let questionCounter = -1;
		return function(){
			let counter = this.state.count+1;
			this.setState({count : counter},()=>{
				if (this.state.count === 11) {
					let answer = this.state.answer;
			if(questionCounter !== -1){		answer.push(document.querySelector('#play-answer').value);
								document.querySelector('#play-answer').value = "";
								this.setState({answer:answer})}
					if(questionCounter === 4){
						clearInterval(this.Timer)
						this.setState({count : 0},()=>
						 this.setState({start : "score"})
						)
					}else{
					this.setState({count : 1},()=>{
						this.setState({question:this.state.questions[questionCounter][1]})
					})
					questionCounter++;
				}
				}
			})	
		}
	}

  componentWillUnmount(){
		clearInterval(this.Timer)
	}
	render(){
		return (
			<div id="play-wrapper">
				{(this.state.start ==="started")? null :<button id="back-to-menu" onClick={()=>this.props.setOption(null)}>{'<'}</button>}
				<span id="timer">{this.state.count}</span>
				<div id="play-container">
					<div id="play-block-intro-question">
					{(this.state.start==="started")?
						<p id="question-place">{(this.state.question)? this.state.question : <span id="get-ready">Get Ready! <span role="img" aria-label="timer">⏳</span></span>}</p>
					:	(this.state.start==="score")?<div>
							<ResultList questions = {this.state.questions} answers = {this.state.answer}/>
							<button className = "play-start" onClick={()=>this.startQuiz("no")}>Play Again</button>
						</div>
						:<p style={{fontSize:"6vw"}}>Test Your Ability Now!!</p>
					}
					</div>
					<div id="play-from-to">
						{(this.state.start === "no")?
								<button className = "play-start" onClick={()=>this.startQuiz("started")}>Start</button>
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