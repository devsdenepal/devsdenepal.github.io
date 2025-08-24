import logo from '/assets/logo.png';
import { Container, Row, Col, Nav, Button } from 'react-bootstrap';
import { FaGithub, FaTwitter, FaLinkedin, FaArrowUp } from 'react-icons/fa';
import React, { useState, useEffect } from "react";

const Footer = () => {
    const navLinks = [
        {
            name: "Home",
            slug: "/",
        },
        {
            name: "About",
            slug: "/#about",
        },
        {
            name: "Tech Stack",
            slug: "/#tech-stack",
        },
        {
            name: "Projects",
            slug: "/#projects",
        },
    ];

    const [showScroll, setShowScroll] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowScroll(window.scrollY > 200);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer style={{ background: '#fff', borderTop: '1px solid #eaeaea', fontFamily: 'Montserrat, sans-serif', fontSize: '15px', position: 'relative' }}>
            <Container>
                <Row className="pt-4 pb-2 align-items-center">
                    <Col md={4} className="d-flex flex-column">
                        <span style={{ fontWeight: 'bold', fontSize: '2rem' }} className='text-gradient'>{'{403}'}</span>
                        <span style={{ fontWeight: 500, fontSize: '1rem' }} className='text-gradient'>devsdenepal</span>
                    </Col>
                    <Col md={4} className="text-md-center mt-3 mt-md-0">
                        <div>+977 98093892xx</div>
                        <div>gautamn7822@gmail.com</div>
                    </Col>
                    <Col md={4} className="text-md-end mt-3 mt-md-0 position-relative">
                        <a href="https://github.com/devsdenepal" target="_blank" rel="noopener noreferrer" style={{ color: '#3c3c5c', marginRight: 16 }}>
                            <FaGithub size={22} />
                        </a>
                        <a href="https://linkedin.com/in/devsdenepal" target="_blank" rel="noopener noreferrer" style={{ color: '#3c3c5c' }}>
                            <FaLinkedin size={22} />
                        </a>
                        {showScroll && (
                            <Button
                                variant="light"
                                onClick={scrollToTop}
                                className='scrollToTop'
                                aria-label="Scroll to top"
                            >
                                <FaArrowUp />
                            </Button>
                        )}
                    </Col>
                </Row>
                <hr />
                <Row className="align-items-center">
                    <Col md={8}>
                        <Nav className="justify-content-start">
                            {navLinks.map((link) => (
                                <Nav.Item key={link.slug}>
                                    <Nav.Link href={link.slug} style={{ color: '#3c3c5c' }}>
                                        {link.name}
                                    </Nav.Link>
                                </Nav.Item>
                            ))}
                        </Nav>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;