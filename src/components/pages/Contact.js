import React from "react";
import resume from '../../assets/cswResumev2.pdf';

export default function Contact() {
    return (
        <div className="row justify-content-center mx-4">
            <div className="card col-12 col-md-6 my-5">
                <div className="card-body">
                    <h5 className="card-title">Please feel free to send me an email at csanchezwagenbach@gmail.com. For more detailed contact information, you can view my resume by following the link below.</h5>
                    <a href={resume} className='card-link'>Colby Sanchez Wagenbach resume</a>
                </div>
            </div>
        </div>
    )
}