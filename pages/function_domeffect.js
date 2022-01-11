import { useEffect, useState } from "react"

const App = () => {
	const [w, setW] = useState(0)
	const [h, setH] = useState(0)

	useEffect(
		function () {
			console.log("Mount...")
			handleResize()
			if (window) {
				window.addEventListener('resize', handleResize)
			}

			return () => {
				console.log("unmount..")
				window.removeEventListener('resize', handleResize)
			}
		},

		[]
	)

	const handleResize = () => {
		if (window) {
			setW(window.innerWidth)
			setH(window.innerHeight)
		}
	}

	return (
		<div style={{
			textAlign: 'center'
		}}>
			<p>Width : {w}</p>
			<p>Height : {h}</p>
			<a href="/function_useeffect">UseEffect</a>
		</div>
	)
}

export default App