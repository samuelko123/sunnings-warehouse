import React from 'react'
import axios from 'axios'

export const useAjaxData = (url) => {
	const [isLoading, setIsLoading] = React.useState(true)
	const [data, setData] = React.useState(null)
	const [errorMsg, setErrorMsg] = React.useState(null)

	const fetchData = React.useCallback(async () => {
		try {
			setIsLoading(true)
			const res = await axios.get(url)
			setData(res.data)
		} catch (err) {
			setErrorMsg(err.toString())
		} finally {
			setIsLoading(false)
		}
	}, [url])

	React.useEffect(() => {
		fetchData()
	}, [fetchData])

	return [isLoading, data, errorMsg]
}