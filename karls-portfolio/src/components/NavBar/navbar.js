import React from 'react';
import { render } from 'react-dom';
import './navbar.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { openComposer } from 'react-native-email-link';
 
openComposer({
   to: 'behrens.karl@gmail.com',
});

function NavBar() {
    return(
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="/about">Karl Behrens</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/about">About Me</Nav.Link>
                    <Nav.Link href="/portfolio">Portfolio</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            <Navbar.Brand onClick={openComposer} className="email">Contact: behrens.karl@gmail.com</Navbar.Brand>
        </Navbar>
    )
}

export default NavBar;