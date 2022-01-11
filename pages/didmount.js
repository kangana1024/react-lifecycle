import { Component } from "react";

export default class App extends Component {

	constructor() {
		super()
		this.state = {
			lists: []
		}
	}
	
	// mounting
	async componentDidMount() {
		const res = await fetch("https://todo.showkhun.co/lists")
		const json = await res.json()

		this.setState({
			lists: json.lists
		})
	}

	render() {
		return (
			<div>
				{JSON.stringify(this.state.lists)}
			</div>
		)
	}
}