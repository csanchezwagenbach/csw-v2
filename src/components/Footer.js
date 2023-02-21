import React from 'react';
import linkedin from '../assets/linkedlogo.png';
import twitter from '../assets/twitlogo.png';
import github from '../assets/gitlogo.png';

export default function Footer() {
    return (
        <div className='row justify-content-center my-2 footer'>
            <a className='col-4 text-center' href="https://twitter.com/colbysanchbach"><img className='logo' src={twitter
            }></img></a>
            <a className='col-4 text-center' href="https://github.com/csanchezwagenbach"><img className='logo' src={github}></img></a>
            <a className='col-4 text-center' href="https://www.linkedin.com/in/colby-wagenbach/"><img className='logo' src={linkedin}></img></a>
        </div>
    )
}
