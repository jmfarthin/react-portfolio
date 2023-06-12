import { useState, useContext } from "react"
import { PageContext } from "../PageProvider"
const Header = () => {
    console.log("Header")
    const [color, setColor] = useState("blue")
    const colorsArr = ["red", "blue", "green"]
    const changeRandomColor = () => {
        const newColor = colorsArr[Math.floor(Math.random() * colorsArr.length)]
        setColor(newColor)
    }
    const { page, changePage } = useContext(PageContext)
    const pageOptions = ["About", "Home", "Contact"]
    return (<>
        <h1>Header Page</h1>
        <nav>
            {pageOptions.map(page => (<button key={page} onClick={() => changePage(page.toLowerCase())}>
                {page}
            </button>))}
        </nav>
        <button onClick={changeRandomColor}>CHange color</button>
    </>)
}

export default Header;