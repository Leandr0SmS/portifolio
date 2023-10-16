const { useState, useEffect } = React;
const { createRoot } = ReactDOM;

const NavBar = () => {
    return (
        <nav id="navbar" class="nav">
            <ul class="nav-list">
                <li>
                    <a href="#welcome-section">About</a>
                </li>
                <li>
                    <a href="#projects">Work</a>
                </li>
                <li>
                    <a href="#contact">Contact</a>
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
        <section id="projects" class="projects-section">
            <h2 class="projects-section-header">These are some of my projects</h2>
            <div class="project-grid">
                <a class="project project-tile" href="https://leandr0sms.github.io/excursion/" target="_blank">
                    <img class="project-image" src="./img/camp.jpg" alt="project"/>
                    <p class="project-title">
                        <span class="code"></span>
                        Excursion
                        <span class="code"></span>
                    </p>
                </a>
                <a class="project project-tile" href="https://leandr0sms.github.io/ernst-tribute/" target="_blank">
                    <img class="project-image" src="./img/ernst-gotsh.jpg" alt="project"/>
                    <p class="project-title">
                        <span class="code"></span>
                        Tribute page
                        <span class="code"></span>
                    </p>
                </a>
                <a class="project project-tile" href="https://leandr0sms.github.io/Interest-Calculator-IBM/" target="_blank">
                    <img class="project-image" src="./img/calculator.png" alt="project"/>
                    <p class="project-title">
                        <span class="code"></span>
                        Interest Calculator
                        <span class="code"></span>
                    </p>
                </a>
                <a class="project project-tile" href="https://leandr0sms.github.io/FreeCodeCamp-projects/matutu-landing-page/index.htm" target="_blank">
                    <img class="project-image" src="./img/GRAFISMO_DUMATUTU_04.jpg" alt="project"/>
                    <p class="project-title">
                        <span class="code"></span>
                        Landing Page
                        <span class="code"></span>
                    </p>
                </a>
            </div>
        </section>
    )
};

const Contact = () => {
    return (
        <section id="contact" class="contact-section">
            <div class="contact-header">
                <h2>Let`s Work...</h2>
            </div>
            <div class="contact-links">
                <a id="profile-link" class="contact-detail" href="https://github.com/Leandr0SmS" target="_blank">
                    <i class="fa-brands fa-github"></i>
                    GitHub
                </a>
                <a class="contact-detail" target="_blank">
                    <i class="fa-brands fa-instagram"></i>
                    Instagram
                </a>
                <a class="contact-detail" href="https://www.freecodecamp.org/LeandroSmS" target="_blank">
                    <i class="fa-brands fa-free-code-camp"></i>
                    FreeCodeCamp
                </a>
                <a class="contact-detail" href="mailto:leandrosimoesms@gmail.com" target="_blank">
                    <i class="fa-solid fa-at"></i>
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