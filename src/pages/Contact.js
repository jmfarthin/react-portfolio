import { useContext } from "react"
import { PageContext } from "../PageProvider"
const Contact = () => {
    console.log("Contact")
    const { page } = useContext(PageContext)
    if (page !== "contact") {
        return (<>{""}</>)
    }
    return (
        <>
            <h1>Contact Page</h1>
        </>
    )
}

export default Contact;