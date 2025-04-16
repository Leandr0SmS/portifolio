import { projectsData } from "./projects.js";

import React, { useState } from 'react';

const NavBar = () => {
    return (
        <nav id="navbar" className="nav">
            <ul className="nav-list">
                <li className="nav-item">
                    <a className="nav-link" href="#welcome-section">About</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#projects">Work</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#contact">Contact</a>
                </li>
            </ul>
        </nav>
    )
};

const WelcomeMoreInfo = ({ toggleStatus }) => {
    return (
        <div id="more_info" className={toggleStatus ? "visible" : "hidden"}>
            <img id="more_info_img" src="./resources/images/foto_cv-3111.jpg" alt="profile picture"/>
            <p  id="more_info_text">
            I currently work as an Airline Pilot for a major Brazilian carrier. 
            My expertise lies in the efficient management of complex systems 
            and the mitigation of risks within high-pressure aviation environments.<br/>
            Leveraging the opportunity presented by the pandemic, 
            I temporarily suspended my aviation career to pursue a new endeavor in sustainable agriculture. 
            I implemented Syntropic Agriculture principles to revitalize degraded ecosystems 
            and contribute to a more environmentally conscious food production.
            In parallel, I've been pursuing software development studies at PUC-RJ and FreeCodeCamp, 
            working on personal projects that have sparked my interest in AI systems and data science.<br/>
            Driven by a passion for continuous learning and solving complex problems, 
            I thrive on challenges and am driven to continuously learn and contribute to innovative solutions.
            </p>
        </div>
    )
};

const WelcomeSection = () => {

    const [toggle, setToggle] = useState(false);

    const handleToggle = () => {
        setToggle(t => !t)
    };

    return (
        <section id="welcome-section">
        <div className={toggle ? "title expand" : "title"}>
            <h1>Hey I am Leandro</h1>
            <p id="subtitle">web developer</p>
            <img 
                id="expand_icon" 
                src={toggle ? "./resources/icons/expand_less_icon.svg" : "./resources/icons/expand_more_icon.svg"} 
                alt="expanded arrow icon" 
                onClick={handleToggle}
            />
            <WelcomeMoreInfo toggleStatus={toggle}/>
        </div>
        </section>
    )
};

const Projects = ({ projects }) => {

    const projectsLinks = projects.map(p => {
        return (
            <a className="project" href={p.url} target="_blank" key={p.id}>
                <img className="project-image" src={`./resources/images/${p.image}`} alt="project"/>
                <p className="project-title">
                    <span className="code">{'< '}</span>
                    {p.name}
                    <span className="code">{' />'}</span>
                </p>
            </a>
        )
    });
    
    return (
        <section id="projects" className="projects-section">
            <h2 className="projects-section-header">These are some of my projects</h2>
            <div className="project-grid">
               {projectsLinks}
            </div>
        </section>
    )
};

const Contact = () => {
    return (
        <section id="contact" className="contact-section">
            <div className="contact-header">
                <h2>Let`s Work...</h2>
            </div>
            <div className="contact-links">
                <a id="profile-link" className="contact-detail" href="https://github.com/Leandr0SmS" target="_blank">
                    <img className="icon" src="./resources/icons/github.png" alt=""/>
                    GitHub
                </a>
                <a className="contact-detail" target="_blank" href="https://www.instagram.com/leandr0simoes/">
                    <img className="icon" src="./resources/icons/instagram.png" alt=""/>
                    Instagram
                </a>
                <a className="contact-detail" href="https://www.freecodecamp.org/LeandroSmS" target="_blank">
                    <img className="icon" src="./resources/icons/freecodecamp.png" alt=""/>
                    FreeCodeCamp
                </a>
                <a className="contact-detail" href="https://www.linkedin.com/in/leandrosimoesms/" target="_blank">
                    <img className="icon" src="./resources/icons/linkedin.png" alt=""/>
                    linkedin
                </a>
                <a className="contact-detail" href="mailto:leandrosimoesms@gmail.com" target="_blank">
                    <img className="icon" src="./resources/icons/email.png" alt=""/>
                    Send a mail
                </a>
            </div>
        </section>
    )
};

const App = () => {
    return (
        <React.Fragment>
            <NavBar/>
            <WelcomeSection/>
            <Projects projects={projectsData} />
            <Contact/>
        </React.Fragment>
    )
};

export default App;