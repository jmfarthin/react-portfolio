import React from 'react'
import githubLogo from '../images/github-mark.png';
import linkedIn from '../images/LI-In-Bug.png';
import twitter from '../images/twitter.png';

const Footer = () => {
    return (<>
        <footer className='d-flex justify-content-center' >
            <ul className='d-flex list-unstyled'>
                <li><a href='https://github.com/jmfarthin' target="_blank" rel="noopener noreferrer"><img className='github-icon' src={githubLogo} alt='github icon' ></img></a></li>
                <li><a href='https://www.linkedin.com/in/justin-farthing/' target="_blank" rel="noopener noreferrer"><img src={linkedIn} className='linkedin-icon' alt='linkedIn icon'></img></a></li>
                <li><a href='https://twitter.com/jmfarthin' target="_blank" rel="noopener noreferrer"><img src={twitter} className='twitter-icon' alt='twitter icon'></img></a></li>
            </ul>
        </footer>
    </>
    )
}

export default Footer