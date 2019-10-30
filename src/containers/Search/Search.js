import React,{Component} from "react";
import SearchBar from "../../components/SearchBar/SearchBar.js"
import Card from "../../components/Card/Card.js"
import {connect} from "react-redux";
import "./Search.css";

const mapStateToProps=state=>({
	user:state.handleLogging.user
})

class Search extends Component{
	constructor(){
		super();
		this.state={
			searchField : "",
			cardContent:{
				from:"",
				to:"",
				translateFrom:"",
				translateTo:""
			}
		}
	}
	onInputChange(type,text){
		switch(type){
			case "to" : return this.setState({cardContent:Object.assign({},this.state.cardContent,{to:text})});
			case "from" : return this.setState({cardContent:Object.assign({},this.state.cardContent,{from:text})});
			case "searchfield" : return this.setState({searchField:text});
			default: return this.state
		}
	}

	search(){
		if (this.state.searchField && this.state.cardContent.from && this.state.cardContent.to ) {
			fetch("https://warm-beach-09378.herokuapp.com/search",{
				method : "post",
				headers : {"Content-Type":"application/json"},
				body:JSON.stringify({
									searchField:this.state.searchField,
									translateTo:this.state.cardContent.to,
									translateFrom:this.state.cardContent.from,
									email: this.props.user.email
								} )
			})
			.then(response=>response.json())
			.then(content=>this.setState({cardContent:Object.assign({},this.state.cardContent,{translateFrom:content.translateFrom,translateTo:content.translateTo})}))
			.catch(err=>console.log(err))
		}else{
			return alert("Fill in Blank Spaces")
		}
	}


	render(){
		return (
			<div id="search-wrapper">
			<button id="back-to-menu" onClick={()=>this.props.setOption(null)}>{'<'}</button>
				<div id="search-container">
					<SearchBar onInputChange={(type,text)=>this.onInputChange(type,text)}/>
					<div id="search-from-to">
						<input type="text" placeholder="From..." id="search-from" onChange={(e)=>this.onInputChange("from",e.target.value)}/>
						<input type="text" placeholder="To..." id="search-to" onChange={(e)=>this.onInputChange("to",e.target.value)}/>
					</div>
					<Card CardContent={this.state.cardContent}/>
					<button id="search-button" onClick={()=>this.search()}><span>&#9787;</span> Search</button>
				</div>
				{console.log(this.state)}
			</div>
		)
	}
}

export default connect(mapStateToProps)(Search);
