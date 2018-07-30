import React, {Fragment, Component} from 'react'

export default class HeaderTwo extends Component{
	render(){
		return (
			<Fragment>
				<h1>{this.props.children}</h1>
				<h2>{this.props.title}</h2>
			</Fragment>
		)
	}
}