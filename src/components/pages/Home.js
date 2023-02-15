import React from 'react';
import sophomoric from '../../assets/sophomoric.jpg'

export default function Home() {
    return (
        <div className='container-fluid'>
            <div className='row'>
                <h1 className='text-center'><em>Hi, my name is Colby</em></h1>

                <img src={sophomoric} className='img-fluid' alt='Sophomoric abstract art'></img>

                <h3>I'm a software engineer that designs, builds, and implements experiences and systems meant to harness and develop intelligences. </h3>
            </div>
        </div>
    )
}