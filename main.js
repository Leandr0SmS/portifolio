import { projectsData } from "./projects.js";

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

const WelcomeMoreInfo = () => {
    return (
        <div id="more_info">
            <img id="more_info_img" src="./resources/images/avatar.png" alt="profile picture"/>
            <p  id="more_info_text">
            Sou um desenvolvedor web com experiência em projetos pessoais, front-end e back-end, 
            que adora novos desafios. Sou um profissional em transição de carreira, possuo experiência 
            profissional como piloto comercial que me possibilitou atuar com sistemas complexos, 
            gestão humana e gestão de riscos. 
            Posso me adaptar bem sob pressão e estou motivado por aprender e contribuir.
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
        <div className="title">
            <h1>Hey I am Leandro</h1>
            <p id="subtitle">web developer</p>
            <img 
                id="expand_icon" 
                src={toggle ? "./resources/icons/expand_less_icon.svg" : "./resources/icons/expand_more_icon.svg"} 
                alt="expanded arrow icon" 
                onClick={handleToggle}
            />
            {
                toggle
                ? <WelcomeMoreInfo/>
                : undefined
            }
        </div>
        </section>
    )
};

const Projects = ({ projects }) => {

    const projectsLinks = projects.map(p => {
        return (
            <a className="project" href={p.url} target="_blank" key={p.id}>
                <img className="project-image" src={`../resources/images/${p.image}`} alt="project"/>
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
                    <img className="icon" src="../resources/icons/github.png" alt=""/>
                    GitHub
                </a>
                <a className="contact-detail" target="_blank" href="https://www.instagram.com/leandr0simoes/">
                    <img className="icon" src="../resources/icons/instagram.png" alt=""/>
                    Instagram
                </a>
                <a className="contact-detail" href="https://www.freecodecamp.org/LeandroSmS" target="_blank">
                    <img className="icon" src="../resources/icons/freecodecamp.png" alt=""/>
                    FreeCodeCamp
                </a>
                <a className="contact-detail" href="https://www.linkedin.com/in/leandrosimoesms/" target="_blank">
                    <img className="icon" src="../resources/icons/linkedin.png" alt=""/>
                    linkedin
                </a>
                <a className="contact-detail" href="mailto:leandrosimoesms@gmail.com" target="_blank">
                    <img className="icon" src="../resources/icons/email.png" alt=""/>
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

//Render
const app = document.getElementById('root');
const root = createRoot(app);
root.render(<App/>);