import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import logo from '../images/logo.png';

const logoStyle = {
    width: 80,
    height: 65,
    borderRadius: 5,
    boxShadow: '5px 5px 5px #ccc'
}

const links = {
    color: '#003054',
    fontFamily: 'Bebas Neue, cursive',
    letterSpacing: 4
}

const Navigation = () => {
    return (
    
        <Navbar expand='lg' fixed='top' style={{padding:10, backgroundColor: 'rgba(255, 255, 255, 0.9)'}}>
            <Container>
                <Navbar.Brand href='/' to='/'>
                    <img src={logo} alt="diversified-tax-logo" style={logoStyle}></img>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls='navbarScroll'/>
                <Navbar.Collapse className='justify-content-around'>
                    <Nav.Link href="/personal-tax" style={links}>
                        Personal Taxes
                    </Nav.Link>
                    <Nav.Link href="/business-tax" style={links}>
                        Business Taxes
                    </Nav.Link>
                    <Nav.Link href="/contact-us" style={links}>
                        Contact Us
                    </Nav.Link>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navigation;

// return (
    
//     <Navbar variant="pills" fixed='top' style={{padding:10, backgroundColor: 'rgba(255, 255, 255, 0.9)'}}>
//         <Container>
//             <Navbar.Brand href='/' to='/'>
//                 <img src={logo} alt="diversified-tax-logo" style={logoStyle}></img>
//             </Navbar.Brand>
//             <Nav.Link href="/personal-tax" style={links}>
//                 Personal Taxes
//             </Nav.Link>
//             <Nav.Link href="/business-tax" style={links}>
//                 Business Taxes
//             </Nav.Link>
//             <Nav.Link href="/contact-us" style={links}>
//                     Contact Us
//             </Nav.Link>
//         </Container>
//     </Navbar>
// )
