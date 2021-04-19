import React from 'react'
import { Nav, Navbar, Container } from 'react-bootstrap'
import logo from '../image/logo.png'
import { LinkContainer } from 'react-router-bootstrap'

const Header = () => {
    return (
        <header>
            <Navbar bg="primary" expand="lg" variant='dark' collapseOnSelect className='py-2'>
                <Container>
                    <LinkContainer to='/'>
                        <Navbar.Brand><img  src={logo} width="80" height="55" /></Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <LinkContainer to='/login'>
                                <Nav.Link>
                                    <i className='fas fa-user'></i>SIGNIN
                                </Nav.Link>
                            </LinkContainer>
                            <LinkContainer to='/cart'>
                                <Nav.Link>
                                    <i className='fas fa-shopping-cart'></i>CART
                                </Nav.Link>
                            </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header
