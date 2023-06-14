import { useContext } from 'react'
import { PageContext } from '../PageProvider'
const Portfolio = () => {
  console.log("Portfolio")
  const { page } = useContext(PageContext)
  if (page !== "portfolio") {
    return (<>{""}</>)
  }
  return (
    <div>Portfolio</div>
  )
}

export default Portfolio