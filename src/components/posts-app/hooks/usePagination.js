import { useMemo } from 'react'

export const usePagination = totalPages => {
	let pagesArray = useMemo(() => {
		let tmpArr = []

		for (let i = 0; i < totalPages; i++) {
			tmpArr.push(i + 1)
		}
		return tmpArr
	}, [totalPages])
	return pagesArray
}
