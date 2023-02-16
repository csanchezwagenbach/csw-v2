import React from "react";
import graduation from '../../assets/graduation.jpg';
import avatar from '../../assets/avatar_portfolio.JPEG';


export default function Bio() {
    return (
        <div className="container-fluid my-1">
            <div className="row mb-1">
                <h6 className="col-8">My design journey began at sixteen, in the drawing studio. 
Never adept at freehand, a straight edge and eraser liberated my pencil to explore perspective. 
Programmatic expression evolved into a creative ethic that followed me into the classroom both as
scholar and teacher, and culminates now in my exploits in software development.</h6>
                <img src={avatar} className='img-fluid col-4' alt='Avatar photo at Paterson Falls'></img>

            </div>
            <h5 className="text-center">Since those sophomoric days in the studio, a number of experiences moulded both my professional ambition and aesthetic development. 
I spent three years appearing on stage with a student theater group while studying in Charlottesville. I graduated in 2016, and
after some time publishing online, I landed in Washington, D.C., where I spent the next two years working at an independent bookstore, selling coffee at Farmer's Markets around the District, 
conducting private tours throughout the capital's galleries, and taking up the study of French at the local Alliance Francaise:
 A time both productive and marvelous.

I moved to New York City and began work as an educator in the Bedford-Stuyvesant section of Brooklyn. Math literacy as theorized and practiced by Bob Moses and The Algebra Project, (Radical
Equations is a must-read for any mathematician) became an obsession. This drive, along with the pressing demands of the pandemic, challenged my students and I to integrate technology into all
aspects of our learning, to see parallels abound between human cognition and technological exercises. I piloted the integration of an online learning platform to supplement the curriculum, and
I'm proud to say my first experience writing code was the Intro to Programming with Karel the Dog.

My curiosities gradually led me out of the classroom as educator and back into one as student. I enrolled at City College in the Mathematics department, riding the train uptown twice a week 
after work to broaden my capacity to engage intelligently with computers. (M train from Myrtle-Broadway into Midtown, crawling to Columbus Circle for the express train up 
to 145th; a proper schlep there and back). While I had thus far harnessed technology in my practice, the opportunity now presented itself to work exclusively with the tools themselves.

I stayed with Lafayette Middle School for four years, from its opening year through to the first graduating class. Difficult as it was to leave teaching behind, I enrolled in a full stack web development
boot camp with the aim of acquiring as many skills as I could in the shortest possible time. While algorithms, CMSs, SQL, and GraphQL thrill my ordered and mathy mind, front-end development captivates me.
I've recently been working with React, Node.js, JavaScript (ES6+), Next.js, and TypeScript.       
</h5>
            <img src={graduation} className='img-fluid' alt='Proud teachers at graduation'></img>
        </div>
    )
}