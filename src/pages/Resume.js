import { useState, useContext } from 'react'
import { PageContext } from '../PageProvider'

const Resume = () => {

  const { page } = useContext(PageContext);
  if (page !== "resume") {
    return (<>{''}</>);
  }

  const handleDownloadResume = () => {
    const resumeUrl = process.env.PUBLIC_URL + '/farthing-portfolio-resume.pdf'; // Update with the actual file path and name

    // link element
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'farthing-portfolio-resume.pdf'; // Specify the desired file name

    // trigger the download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className='mt-5'>
      <h1 className='yellowbg'>Resume</h1>
      <div className='bluebg p-4'>
      <button className='btn btn-resume' onClick={handleDownloadResume}>Download Resume</button>
      <h2 className='pt-3'>Proficiencies</h2>
      <ul>
        <li>Proficiency 1</li>
        <li>Proficiency 2</li>
        <li>Proficiency 3</li>
        {/* Add more proficiency items as needed */}
      </ul>
      </div>
    </div>
  );
};

export default Resume