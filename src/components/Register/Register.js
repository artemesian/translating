import React ,{Component}from "react";
import "./Register.css";

class Register extends Component {
    Register(){

       if(document.querySelectorAll(".input-register")[0].value && document.querySelectorAll(".input-register")[1].value && document.querySelectorAll(".input-register")[2].value && document.querySelectorAll(".input-register")[3].value){
          if (document.querySelectorAll(".input-register")[2].value!==document.querySelectorAll(".input-register")[3].value) {
            return alert("Passwords don't match")
          }
          else{
           fetch("http://localhost:3001/register" ,{
               method : "post",
               headers : {"Content-Type": "application/json"},
               body : JSON.stringify({
                   name : document.querySelectorAll(".input-register")[0].value ,
                   email : document.querySelectorAll(".input-register")[1].value ,
                   password :document.querySelectorAll(".input-register")[2].value 
               })
           })
           .then(response=>response.json())
           .then(user=>{
               if(user==="email exist"){
                   return alert("Email Exist")
               }else{
                   this.props.loadUser(user);
                   return this.props.setLoggedIn("true")
               }
           })
           .catch(err=>{ console.log("erroooooooooor",err);alert("Something went wrong")})
           }
       }else{
           alert("Fill in blank spaces")
       }
    }
    render(){        
        return (
            <div id="form-signup" className="form-register">
                <header className="header-register">Translating<span onClick={() => {this.props.setStartButton();}}>&times;</span></header>
                <section className="section-register">
                    <div id="name-input" >
                        <span>Name:</span>
                        <input type="text" placeholder="John Doe" className="input-register"/>
                    </div>
                    <div id="email-input">
                        <span>Email:</span>
                        <input  type="email" placeholder="johndoe@gmail.com"  className="input-register" />
                    </div>
                    <div id="password-input">
                        <span>Password:</span>
                        <input type="password"  className="input-register" />
                    </div>
                    <div id="confirm-password-input">
                        <span>Confirm Password:</span>
                        <input type="password"  className="input-register" />
                    </div>
                    <button onClick={()=>this.Register()}>SignUp</button>
                </section>
                <footer className="footer-register">
                        Already a member? <span onClick={() => this.props.setSignupLoginButton()}>Login</span>
                </footer> 
            </div>
        )
    }    
}

export default Register;