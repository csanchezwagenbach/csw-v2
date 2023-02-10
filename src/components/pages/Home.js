import React from 'react';
import sophomoric from '../../assets/sophomoric.jpg'

export default function Home() {
    return (
        <div className='container-fluid'>
            <div className='row'>
                <p className='col-12 col-md-6'>HelLo, world</p>
                <img className='col-12 col-md-6' src={sophomoric} alt="Sophomoric abstract art"></img>
            </div>
        </div>
    )
}