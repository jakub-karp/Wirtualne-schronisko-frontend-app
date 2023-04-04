import React from 'react'
import logo from './assets/logo.png';
import './Header.css';
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar bg='light' expand="lg">
        <Container fluid>
            <Navbar.Brand href='#'>
                <img src={logo} alt="logo" className="d-inline-block align-top logo"/>
                {' '}Wirtualne schronisko
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll" className="justify-content-end">
                <Nav
                    className="ml-auto my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                >
                    <Nav.Link href="#action1">Home</Nav.Link>
                    <Nav.Link href="#action2">O nas</Nav.Link>
                    <NavDropdown title="Schroniska" id="navbarScrollingDropdown">
                        <NavDropdown.Item href="#action3">Schronisko w Toruniu</NavDropdown.Item>
                        <NavDropdown.Item href="#action4">
                            Schronisko w Bydgoszczy
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action5">
                            Schronisko w Krakowie
                        </NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                
                <Button variant="outline-warning" className='btnadoptuj btn-lg mr-2'>Adoptuj!</Button>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  )
}

export default Header