import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import logo from '../images/logo.png';

// Stylings
const footerLogoStyle = {
    width: 120,
    height: 100,
    borderRadius: 5,
    boxShadow: '5px 5px 5px #ccc'
}

const icon = {
    color: '#003054',
    padding: 3
}

const copyright = {
    color: '#003054'
}

const Footer = () => { 
    return (
    
        <Navbar fixed='bottom'>
            <Container>
                {/* Div containing icons and copyright */}
                <Container className='flex-column'>
                    <Container >
                        <a href='https://www.facebook.com/DiversifiedTax/' target='_blank' rel="noreferrer" style={icon}>
                            <i className="fab fa-facebook fa-2x"></i>
                        </a>
                        <a href='https://www.instagram.com/diversifiedtax/' target='_blank' rel="noreferrer"  style={icon}>
                            <i className="fab fa-instagram fa-2x"></i>
                        </a>
                    </Container>

                    <Container>
                        <small style={copyright}>Copyright ©2021 Diversified Tax </small>
                    </Container>
                </Container>
            
                {/* Logo justified to the end */}
                <Navbar.Brand href='/' to='/'>
                    <img src={logo} alt="diversified-tax-logo" style={footerLogoStyle}></img>
                </Navbar.Brand>
            </Container>
        </Navbar>
    )
}

export default Footer;