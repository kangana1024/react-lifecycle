import { Component } from "react";

export default class App extends Component {
	// mounting
	constructor() {
		super()
		this.state = {
			name: "Kan",
			isShow: true
		}
	}

	render() {
		return (<div>
			{isShow ? <Hello name={this.state.name} /> : null}
		</div>)
	}
}

class Hello extends Component {
	static getDerivedStateFromProps(nextProps, prevState) {
		return {
			name: nextProps.name
		}
	}

	render() {
		return (<div>Hello : {this.state.name}</div>)
	}
}