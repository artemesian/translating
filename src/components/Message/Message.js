import React from "react";
import "./Message.css";

const Message = (props) => {
	return(
		<div id="message-container">
			<div>Welcome 
				{(props.isRegistered)?
					" "
				:
					" Back "
				} 
				&nbsp; <span id="message-user">{`  ${props.user.name.split(" ")[0]}`}</span>
			</div>
		</div>
		)
}

export default Message;