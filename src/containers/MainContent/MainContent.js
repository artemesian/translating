import React ,{Component} from "react";
import Options from "../../components/Options/Options.js";
import Aux from "../hoc/Aux.js"
import Add from "../Add/Add.js"
import Search from "../Search/Search.js"
import Play from "../Play/Play.js"
import {connect} from "react-redux"
import "./MainContent.css";
import { setOption } from "../../actions.js"

const mapStateToProps=state=>({
	option : state.handleLogging.option
})

const mapDispatchToProps=dispatch=>({
	setOption : (text) => dispatch(setOption(text))
})

class MainContent extends Component{
	render() {
		return (
			<Aux>
				<Aux>
					{(this.props.option === "search")?
						<Search setOption={this.props.setOption}/>
					:
						(this.props.option === "play")?
								<Play setOption={this.props.setOption}/>
						:
							(this.props.option === "add")?
						    <Add setOption={this.props.setOption}/>
						  :
						  <Aux>
						  	<button id="back-to-menu" onClick={()=>this.props.setLoggedIn("false")}>&#9668;</button>
						  	<Options setOption={this.props.setOption}/>
						  </Aux>
					}
				</Aux>
			</Aux>	
		)
	}
}
export default connect(mapStateToProps,mapDispatchToProps)(MainContent)