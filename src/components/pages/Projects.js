import React from 'react';

export default function Projects () {

    const projects = [
        {
            title: "chef-gpt",
            repository: "https://github.com/csanchezwagenbach/chef-gpt",
            url: "https://boiling-springs-79959.herokuapp.com/login",
            description: "A full stack application guiding a user's interaction with OpenAI's GPT-3 models through a questionnaire. Through mediated interactions, casual users may most effectively leverage artificial intelligence assets. This application serves as sample demonstration of mediated interactions maximizing an artificial intelligences use-value.",
            tags: "OpenAI API, MySQL, Express, Node.js"
        },
        {
            title: "Applied",
            repository: "https://github.com/csanchezwagenbach/applied-v1",
            url: "https://fathomless-brushlands-43089.herokuapp.com/",
            description: "Applied is a MERN Stack CMS designed to assist job applicants in an often decentralized endeavor. Users may save details pertaining to job applications they have sent out, upload materials for future reference, and track trends over the course of their job search.",
            tags: "MERN, CMS, GraphQL"
        },
        {
            title: "CMS Sample: Blog",
            repository: "https://github.com/csanchezwagenbach/tech-blog-mvc-sample",
            url: "https://floating-springs-81705.herokuapp.com/",
            description: "Full stack CMS utilizing the Model-View-Controller paradigm to organize application functionality.",
            tags: "CMS, MySQL, Express, Node.js"
        }
    ]
    return (
        <div>
        <p>Here we are now, guv'nuh</p>
        </div>
    )
}