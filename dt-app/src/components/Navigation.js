import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
//Delete above if I could figure out dropdown menu
// import { Container, Navbar, Nav , NavDropdown} from 'react-bootstrap';
import logo from '../images/logo.png';

const logoStyle = {
    width: 80,
    height: 65,
    borderRadius: 5,
    boxShadow: '5px 5px 5px #ccc'
}

const Navigation = () => {
    return (
    
        <Navbar variant="pills" fixed='top'>
            <Container>
                <Navbar.Brand href='/' to='/'>
                    <img src={logo} alt="diversified-tax-logo" style={logoStyle}></img>
                </Navbar.Brand>
                {/* <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <NavDropdown title="Clients" id="nav-dropdown"> */}
                        {/* <NavDropdown.Item> */}
                            <Nav.Link href="/personal-tax">
                                Personal Taxes
                            </Nav.Link>
                        {/* </NavDropdown.Item> */}
                        {/* <NavDropdown.Item> */}
                            <Nav.Link href="/business-tax">
                                Business Taxes
                            </Nav.Link>
                        {/* </NavDropdown.Item> */}
                    {/* </NavDropdown> */}
                <Nav.Item>
                    <Nav.Link href="/contact-us">
                        Contact Us
                    </Nav.Link>
                </Nav.Item>
                {/* </Navbar.Collapse> */}
            </Container>
        </Navbar>
    )
}

export default Navigation;