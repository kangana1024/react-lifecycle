import { withShowAlert } from "./hoc"

const Button = (props) => {
	const {onChange, name} = props
	return (
		<p>
			<p>{name}</p>
			<button onClick={onChange("Button")}>
				Click
			</button>
		</p>
	)
}

export default withShowAlert(Button)