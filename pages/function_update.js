import { useEffect, useState } from "react"

const App = () => {
	const [begin, setBegin] = useState(0)
	const [end, setEnd] = useState(0)

	const handleSetBegin = (e) => {
		setBegin(+e.target.value)
	}

	const handleSetEnd = (e) => {
		setEnd(+e.target.value)
	}

	useEffect(
		() => {
			if (begin > end) {
				setEnd(+begin + 1)
			}
		},
		
		[begin]
	)

	return (
		<div style={{
			textAlign: 'center'
		}}>
			<p>Begin : <input defaultValue={begin} onKeyUp={handleSetBegin} /></p>
			<p>End : <input defaultValue={end} onKeyUp={handleSetEnd} /></p>
		</div>
	)
}

export default App