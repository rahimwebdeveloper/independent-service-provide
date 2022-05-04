import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../Images/logo.png'
import './Header.css'

const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" className="navbar" >
                <Container>
                    <Navbar.Brand as={Link} to="/" >
                        <img height="30" src={logo} alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse className='d-lg-flex justify-content-end' id="responsive-navbar-nav">
                        <Nav >
                            <Nav.Link as={Link} to="/home">Home</Nav.Link>
                            <Nav.Link as={Link} to="/blogs">Blogs</Nav.Link>
                            <Nav.Link as={Link} to="/about">About us</Nav.Link>
                            <Nav.Link as={Link} to="/login">
                                Login
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;