import React,{Component} from "react";
import "./Page.css";
import {connect} from "react-redux";
import Aux from "../hoc/Aux.js";
import Message from "../../components/Message/Message.js";
import MainContent from "../MainContent/MainContent.js";
import {setLoggedIn} from "../../actions.js"

const mapStateToProps=state=>({
	isRegistering:state.handleLogging.isRegistering,
	isLoggedIn:state.handleLogging.isLoggedIn,
	user : state.handleLogging.user
})
const mapDispatchToProps=dispatch=>({
	setLoggedIn: (text) => dispatch(setLoggedIn(text)),
})

class Page extends Component{
	constructor(props){
		super(props);
		this.state={
			counter:false
		}
	}
	counting = () =>{
		setTimeout(()=>this.setState({counter:true}),4000)	
	}

	render(){
		return(
			<div id="page-container"> 
			{(!this.state.counter)?
				<Aux>
				{this.counting()}
				<Message isRegistered={this.props.isRegistering} user={this.props.user}/>
				</Aux>
			:
				<MainContent setLoggedIn={this.props.setLoggedIn}/>
			}
			</div>
		);
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(Page);