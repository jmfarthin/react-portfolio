import {useContext} from 'react'
import { PageContext } from '../PageProvider'
const Home = () => {
    console.log("Home")
    const {page} = useContext(PageContext)
    if(page !== "home"){
        return (<>{""}</>)
    }
  return (
    <div>Home</div>
  )
}

export default Home