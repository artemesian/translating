import React,{Component} from "react";
import "./Login.css";

class  Login extends Component {
    SignIn(){

       if(document.querySelectorAll(".input-login")[0].value && document.querySelectorAll(".input-login")[1].value){
           fetch("http://localhost:3001/signin" ,{
               method : "post",
               headers : {"Content-Type": "application/json"},
               body : JSON.stringify({
                   email : document.querySelectorAll(".input-login")[0].value ,
                   password :document.querySelectorAll(".input-login")[1].value 
               })
           })
           .then(response=>response.json())
           .then(user=>{
               if(user.email){
                  this.props.loadUser(user);
                  return this.props.setLoggedIn("true")
               }else{
                 return alert("Incorrect") 
               }
           })
           .catch(err=>console.log("Something went wrong"))
       }else{
           alert("Fill in blank spaces")
       }
    }
    render(){
        return (
                <div id="form-login" className="form-login">
                    <header className="header-login">Translating<span onClick={() => {this.props.setStartButton();}}>&times;</span></header>
                    <section className="section-login">
                        <div id="email-input">
                            <span>Email:</span>
                        <input type="email" placeholder="johndoe@gmail.com" className="input-login"/>
                        </div>
                        <div id="password-input">
                            <span>Password:</span>
                            <input type="password" className="input-login"/>
                        </div>
                            <button onClick={()=>this.SignIn()}>Login</button>
                    </section>
                    <footer className="footer-login">
                                Not yet a member? <span onClick={() => this.props.setSignupLoginButton()}>SignUp</span>
                    </footer>
                </div>
        )
    }   
}
export default Login;