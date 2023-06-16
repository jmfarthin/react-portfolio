import { useState, useContext } from "react"
import { PageContext } from "../PageProvider"
import headshot from "../images/Headshot-JMF.jpg"
const Home = () => {
    console.log("Home")

    const { page } = useContext(PageContext)
    if (page !== "home") {
        return (<>{""}</>)
    }

    return (<>
        <div className="pt-5 row">
            <div className="col-8 home d-flex row me-2">
                <h1 className="align-self-end">Howdy, I'm Justin Farthing</h1>
                <p>I'm a web developer with experience in a variety of technologies including Javascript, Node, MySQL, MongoDB, React, and Express.</p>
            </div>
            <div className="col-4 "><img className="headshot" src={headshot}></img></div>
        </div>
    </>)
}

export default Home