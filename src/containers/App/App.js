import React,{Component} from 'react';
import {connect} from "react-redux";
import Welcome from "../../components/Welcome/Welcome.js";
import Login from "../../components/Login/Login.js";
import Page from "../Page/Page.js";
import Register from "../../components/Register/Register.js";
import './App.css';
import Particles from 'react-particles-js';
import Aux from "../hoc/Aux.js";
import {handleStartButton,handleSignupLoginButton,setLoggedIn,loadUser} from "../../actions.js"

const mapStateToProps=state=>({
	startButton:state.handleLogging.startButton,
	isRegistering:state.handleLogging.isRegistering,
	isLoggedIn:state.handleLogging.isLoggedIn,
	user:state.handleLogging.user
})

const mapDispatchToProps=dispatch=>({
	handleStartButton: (bool)=>dispatch(handleStartButton(bool)),
	handleSignupLoginButton: (bool) => dispatch(handleSignupLoginButton(bool)),
	setLoggedIn: (text) => dispatch(setLoggedIn(text)),
	loadUser : (user) => dispatch(loadUser(user))
})

const particlesOptions = {
	particles: {
		number: {
			value: 85,
			density: {
				enable: true,
				value_area:2000
			}
		}
	}
}
		
class App extends Component{

	render(){
	  return (
	    <div className="App">
	    	<Particles className='particles' params={particlesOptions}/>
	    	{(this.props.isLoggedIn==="false")?
		      (!this.props.startButton)?
		      	<Welcome setStartButton={this.props.handleStartButton}/>
		      :
		      	<Aux>
		      		{(!this.props.isRegistering)?
		      		<Login setStartButton={this.props.handleStartButton}
		      		 	setSignupLoginButton={this.props.handleSignupLoginButton} 
		      		 	setLoggedIn={this.props.setLoggedIn}
		      		 	loadUser={this.props.loadUser}/>
		      		:
		      		<Register setStartButton={this.props.handleStartButton}
		      			setSignupLoginButton={this.props.handleSignupLoginButton}
		      			setLoggedIn={this.props.setLoggedIn}
		      			loadUser={this.props.loadUser}/>
		      		}
		      	</Aux>
		     :
		    <Page setLoggedIn={this.props.setLoggedIn}/>
		   	}
	      {console.log(this.props)}
	    </div>
	  );
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(App);

