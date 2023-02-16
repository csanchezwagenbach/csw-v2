import React from 'react';
import sophomoric from '../../assets/sophomoric3.jpg'
import somphomoric2 from '../../assets/sophomoric2.jpg'

export default function Home() {
    return (
        <div className='container-fluid'>
            <div className='row justify-content-center'>
                <h1 className='text-center'><em>Hi, my name is Colby</em></h1>
                <div className='card col-10'>
                    <img src={sophomoric} className='img-fluid my-2' alt='Sophomoric abstract art'>                      
                    </img>
                </div>
                <h3>I'm a software engineer that designs, builds, and implements experiences and systems meant to harness and develop intelligences. </h3>
            </div>
        </div>
    )
}