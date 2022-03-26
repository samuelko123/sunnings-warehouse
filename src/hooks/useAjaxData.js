import React from 'react'
import axios from 'axios'

export const useAjaxData = (url) => {
	const [isLoading, setIsLoading] = React.useState(true)
	const [data, setData] = React.useState([])
	const [errorMsg, setErrorMsg] = React.useState(null)

	const fetchData = async () => {
		try {
			setIsLoading(true)
			const res = await axios.get(url)
			setData(res.data)
		} catch (err) {
			setErrorMsg(err.toString())
		} finally {
			setIsLoading(false)
		}
	}

	React.useEffect(() => {
		fetchData()
	}, [])

	return [isLoading, data, errorMsg]
}