import React,{Component} from "react";
import {connect} from "react-redux";
import "./Add.css";

const mapStateToProps=state=>({
	user:state.handleLogging.user
})

class Add extends Component{
	add(){
		 if(document.querySelectorAll(".textarea-add")[0].value && document.querySelectorAll(".textarea-add")[1].value){
           fetch("https://warm-beach-09378.herokuapp.com/add" ,{
               method : "post",
               headers : {"Content-Type": "application/json"},
               body : JSON.stringify({
                   translateFromContent : document.querySelectorAll(".textarea-add")[0].value ,
                   translateToContent : document.querySelectorAll(".textarea-add")[1].value ,
                   email : this.props.user.email
               })
           })
           .then(response=>response.json())
           .then(result=>{
               if(result==="success"){
             			document.querySelectorAll(".textarea-add")[0].value=""
									document.querySelectorAll(".textarea-add")[1].value=""
                  return alert("Added Successfully")
               }else{
             			return alert("Failed to add")
               }
           })
           .catch(err=>alert("Something went wrong"))
       }else{
           alert("Fill in blank spaces")
       }
	}
	render(){
		return (
			<div id="add-wrapper">
			<button id="back-to-menu" onClick={()=>this.props.setOption(null)}>&#9668;</button>
				<div id="add-container">
					<div className="non-translate-block">
						<h4 className="title-block-add">Translate From(Fr)</h4>
						<textarea placeholder="Bonjour!....." className="textarea-add"/>
					</div>
					<div id="translate-block">
					<h4 className="title-block-add">Translate To(De)</h4>
						<textarea placeholder="Guten Tag!....." className="textarea-add"/>
					</div>
					<button id="add-button" onClick={()=>this.add()}><span>&#9787;</span> Add</button>
				</div>
			</div>
		)
	}
}

export default connect(mapStateToProps)(Add);