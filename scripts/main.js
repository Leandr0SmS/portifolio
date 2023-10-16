const { useState, useEffect } = React;
const { createRoot } = ReactDOM;

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

const WelcomeSection = () => {
    return (
        <section id="welcome-section">
            <h1>Hey I am Leandro</h1>
            <p>web developer</p>
        </section>
    )
};

const Projects = () => {
    return (
        <section id="projects" className="projects-section">
            <h2 className="projects-section-header">These are some of my projects</h2>
            <div className="project-grid">
                <a className="project project-tile" href="https://leandr0sms.github.io/excursion/" target="_blank">
                    <img className="project-image" src="./img/camp.jpg" alt="project"/>
                    <p className="project-title">
                        <span className="code"></span>
                        Excursion
                        <span className="code"></span>
                    </p>
                </a>
                <a className="project project-tile" href="https://leandr0sms.github.io/ernst-tribute/" target="_blank">
                    <img className="project-image" src="./img/ernst-gotsh.jpg" alt="project"/>
                    <p className="project-title">
                        <span className="code"></span>
                        Tribute page
                        <span className="code"></span>
                    </p>
                </a>
                <a className="project project-tile" href="https://leandr0sms.github.io/Interest-Calculator-IBM/" target="_blank">
                    <img className="project-image" src="./img/calculator.png" alt="project"/>
                    <p className="project-title">
                        <span className="code"></span>
                        Interest Calculator
                        <span className="code"></span>
                    </p>
                </a>
                <a className="project project-tile" href="https://leandr0sms.github.io/FreeCodeCamp-projects/matutu-landing-page/index.htm" target="_blank">
                    <img className="project-image" src="./img/GRAFISMO_DUMATUTU_04.jpg" alt="project"/>
                    <p className="project-title">
                        <span className="code"></span>
                        Landing Page
                        <span className="code"></span>
                    </p>
                </a>
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
                    <i className="fa-brands fa-github"></i>
                    GitHub
                </a>
                <a className="contact-detail" target="_blank">
                    <i className="fa-brands fa-instagram"></i>
                    Instagram
                </a>
                <a className="contact-detail" href="https://www.freecodecamp.org/LeandroSmS" target="_blank">
                    <i className="fa-brands fa-free-code-camp"></i>
                    FreeCodeCamp
                </a>
                <a className="contact-detail" href="mailto:leandrosimoesms@gmail.com" target="_blank">
                    <i className="fa-solid fa-at"></i>
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
            <Projects/>
            <Contact/>
        </React.Fragment>
    )
};

//Render
const app = document.getElementById('root');
const root = createRoot(app);
root.render(<App/>);