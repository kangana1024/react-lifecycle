import { useEffect, useState } from "react"

function App() {
	const [lists, setLists] = useState([])

	// mounting
	useEffect(
		function () {
			fetchData().then((json) => {
				setLists(json)
			})
		},

		[]
	)

	const fetchData = async () => {
		const res = await fetch("https://todo.showkhun.co/lists")
		const json = await res.json()

		return json.lists
	}


	return (
		<div>
			{JSON.stringify(lists)}
		</div>
	)
}

export default App