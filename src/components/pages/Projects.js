import React from 'react';

export default function Projects () {

    const projects = [
        {
            title: "Chef-GPT",
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
        },
        {
            title: "Employee-Tracker CMS",
            repository: "https://github.com/csanchezwagenbach/employee-tracker-cms",
            url: "https://github.com/csanchezwagenbach/employee-tracker-cms",
            description: "Command-line application utilizing Node.js, Inquirer, and MySQL to create an interactive sample of a content management system",
            tags: "CLI, CMS, MySQL, Node.js"
        },
        {
            title: "Sample Social Network API",
            repository: "https://github.com/csanchezwagenbach/sample-social-network-api",
            url: "https://github.com/csanchezwagenbach/sample-social-network-api",
            description: "Sample of a functioning social network espress.js API configured with Mongoose to interact with a Mongo database.",
            tags: "REST API, Express, MongoDB, Mongoose"
        },
        {
            title: "Sample E-Commerce API",
            repository: "https://github.com/csanchezwagenbach/e-commerce-back-end-sample",
            url: "https://github.com/csanchezwagenbach/e-commerce-back-end-sample",
            description: "Sample of a functioning e-commerce express.js API configured with Sequelize to interact with a MySQL database.",
            tags: "REST API, Express, MySQL, Sequelize"
        }
    ]
    return (
        <div>
        <p>Here we are now, guv'nuh</p>
        </div>
    )
}