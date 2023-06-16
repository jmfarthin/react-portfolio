import { useState, useContext } from 'react'
import { PageContext } from '../PageProvider'

const Resume = () => {

  const { page } = useContext(PageContext);
  if (page !== "resume") {
    return (<>{''}</>);
  }

  return (
    <div>Resume</div>
  )
}

export default Resume