import { useEffect } from "react"


const setTitle = (title) => {
    useEffect(() => {
        document.title = `${title} -Baby dolls`
    }, [title])
}

export default setTitle