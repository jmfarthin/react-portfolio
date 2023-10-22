import { useState, useContext } from "react"
import { PageContext } from "../PageProvider"
const About = () => {
    console.log("About")

    const { page } = useContext(PageContext)
    if (page !== "about me") {
        return (<>{""}</>)
    }

    return (<>
        <div className="about-page mt-5">
            <div>
                <h1>About Me</h1>

            </div>
            <div className="about-me">
                <p className="pt-3">Hi, my name is Justin Farthing and I'm a fullstack developer.
                    In addition to development, I have experience in higher education retail management, teaching, and sales.</p>
                <p className="pt-3">I have experience in fontend, backend, and fullstack applications using a variety of technologies including
                    Javascript, Node, HTML, CSS, Express, GraphQL, MySQL, and MongoDB.</p>
                <p className="pt-3">When I'm not working I like to spend time with my family, cooking, and doing a little gaming.</p>
            </div>
        </div>
    </>)
}

export default About