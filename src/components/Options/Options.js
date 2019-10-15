import React from "react";
import "./Options.css";

const Options = (props) =>{
	return (
		<div id="options-wrapper">
			<div id="options-container">
				<button id="search-btn" onClick = {() => props.setOption("search") }>Search</button>
				<button id="play-btn" onClick = {() => props.setOption("play") }>Play</button>
				<button id="add-btn" onClick = {() => props.setOption("add") }>Add</button>
			</div>
		</div>
	)
}

export default Options;