import { Component } from "react";

export default class App extends Component {

	constructor() {
		super()
		this.state = {
			name: "Kan",
			isShow: true
		}
	}

	handleToggle = () => {
		this.setState({
			isShow: !this.state.isShow
		})
	}

	render() {
		return (<div>
			{this.state.isShow ? <Hello name={this.state.name} /> : null}
			<p>
				<button onClick={this.handleToggle}>hide</button>
			</p>
		</div>)
	}
}

class Hello extends Component {
	static getDerivedStateFromProps(nextProps, prevState) {
		return {
			name: nextProps.name
		}
	}

	componentWillUnmount() {
		console.log("Unmounting...")
	}

	render() {
		return (<div>Hello : {this.state.name}</div>)
	}
}