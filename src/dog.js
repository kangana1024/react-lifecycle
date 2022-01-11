import { withShowAlert } from "./hoc"
import {Component} from 'react'
class ImageDog extends Component {

	render() {
		return (<div>
			<button onClick={this.props.onChange("dog")}>
				<p>{this.props.name}</p>
				<img width={200} src="https://i.guim.co.uk/img/media/fe1e34da640c5c56ed16f76ce6f994fa9343d09d/0_174_3408_2046/master/3408.jpg?width=620&quality=45&auto=format&fit=max&dpr=2&s=064680b85e72644d9cc2e69e2763c541" alt="dog" />
			</button>
		</div>)
	}
}
export default withShowAlert(ImageDog)
