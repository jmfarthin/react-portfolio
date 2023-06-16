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
                <p className="pt-3">Hi, thanks for stopping by! My name is Justin Farthing and I've just started my web development journey.
                    I'm a career-switcher with my background in management and sales. With a slew of projects under my belt I am seeking my first development role!</p>
                <p className="pt-3">I have experience in fontend, backend, and fullstack applications using a variety of technologies including
                    Javascript, Node, HTML, CSS, Express, GraphQL, MySQL, and MongoDB.</p>
                <p className="pt-3">When I'm not studying, coding, playing peek-a-boo with my toddler, or lifting weights, I'm usually devouring seasonal content on Destiny 2.</p>
            </div>
        </div>
    </>)
}

export default About