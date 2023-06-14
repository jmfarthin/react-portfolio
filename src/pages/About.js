import { useState, useContext } from "react"
import { PageContext } from "../PageProvider"
const About = () => {
    console.log("About")

    const { page } = useContext(PageContext)
    if (page !== "about") {
        return (<>{""}</>)
    }

    return (<>
        <h1>About Page</h1>
    </>)
}

export default About