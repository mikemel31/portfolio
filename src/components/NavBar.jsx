import { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import linkedin from '../assets/img/linkedin.svg.png';
import github from '../assets/img/github.png';
import email from '../assets/img/email.png';
import resume from '../assets/img/resume.png';
import mikeResume from '../assets/mike_melnikov_resume.pdf';

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }

        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    };
    
    return (
        <Navbar expand="lg" className={scrolled ? 'scrolled' : ''}>
            <Container>
                <Navbar.Brand href="#home">Mike Melnikov</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')} href="#home">Home</Nav.Link>
                        <Nav.Link className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')} href="#skills">Skills</Nav.Link>
                        <Nav.Link className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')} href="#prjects">Projects</Nav.Link>
                    </Nav>
                    <span className="navbar-test">
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/mike-mel/" target="_blank"><img src={linkedin} alt="linkedIn" height={35} width={35} /></a>
                            <a href="https://github.com/mikemel31" target="_blank"><img src={github} alt="GitHub" height={35} width={35} /></a>
                            <a href={mikeResume} target="_blank"><img src={resume} alt="email" height={35} width={35} /></a>
                            <a href="mailto: mihail3197@gmail.com" target="_blank"><img src={email} alt="email" height={35} width={46} /></a>
                        </div>
                        {/* <button className="vvd" onClick={() => console.log('connect')}><span>Let's connect</span></button> */}
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
