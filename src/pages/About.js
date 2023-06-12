import { useState, useContext } from "react"
import { PageContext } from "../PageProvider"
const About = () => {
    console.log("About")
    const [color, setColor] = useState("blue")
    const colorsArr= ["red", "blue", "green"]
    const changeRandomColor = () => {
        const newColor = colorsArr[Math.floor(Math.random() * colorsArr.length)]
        setColor(newColor)
    }
    const {page} = useContext(PageContext)
    if(page !== "about"){
        return (<>{""}</>)
    }
    
    return(<>
    <h1>About Page</h1>
    <h2 style={{backgroundColor: color}}>{color}</h2>
    <button onClick={changeRandomColor}>CHange color</button>
    </>)
}

export default About