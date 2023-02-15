import React from "react";
import graduation from '../../assets/graduation.jpg';
import avatar from '../../assets/avatar.JPEG';


export default function Bio() {
    return (
        <div className="container-fluid my-1">
            <div className="row mb-1">
                <p className="col-6">My design journey began at sixteen, in the drawing studio. 
Never adept at freehand, a straight edge and eraser liberated my pencil to explore perspective. 
Programmatic expression evolved into creative ethic that followed me into the classroom both as
scholar and teacher, and culminates now in my exploits in software development.</p>
                <img src={avatar} className='img-fluid col-6' alt='Sophomoric abstract art'></img>

            </div>
            <p className="text-center">Then a bunch of text here.</p>
            <img src={graduation} className='img-fluid' alt='Proud teachers at graduation'></img>
        </div>
    )
}