import { useEffect } from "react"

const useTitle = (title) => {
    useEffect(() => {
        document.title = `${title} - School of Rock`;
    }, [title])
}

export default useTitle;