import { useState, useContext } from "react"
import { PageContext } from "../PageProvider"
const Header = () => {
    console.log("Header")
    const { page, changePage } = useContext(PageContext)
    const pageOptions = ["About", "Portfolio", "Contact"]
    return (<>
        <header className="d-flex justify-content-evenly">
            <div>
                <h1>Justin Farthing</h1>
            </div>
            
            <nav className="nav">
                {pageOptions.map(page => (<button className="nav-item btn" key={page} onClick={() => changePage(page.toLowerCase())}>
                    {page}
                </button>))}
            </nav>
        </header>
    </>)
}

export default Header;