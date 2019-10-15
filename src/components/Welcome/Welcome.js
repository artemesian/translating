import React from "react";
import './Welcome.css';
const Welcome=(props)=>{
    return(
        <div id="welcome-container">
            <div id="logo">
                Translating...
                  <h4 id="slogan">
                Learning becomes <code className="code-left">nice</code> and <code className="code-right">easy</code>
            </h4>
            <button id="start" onClick={()=>props.setStartButton()}>Get Started!</button>
            </div>
        </div>
    )
};
export default Welcome;