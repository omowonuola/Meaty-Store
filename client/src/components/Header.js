import React from 'react'
import { Nav, Navbar, Container } from 'react-bootstrap'
import logo from '../image/logo.png'

const Header = () => {
    return (
        <header>
            <Navbar bg="primary" expand="lg" variant='dark' collapseOnSelect className='py-2'>
                <Container>
                    <Navbar.Brand href="/"><img  src={logo} width="80" height="55" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Link href="/login"><i className='fas fa-user'></i> SIGNIN</Nav.Link>
                            <Nav.Link href="/cart"><i className='fas fa-shopping-cart'></i>CART</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header
