import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
// import cookie from 'js-cookie';
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
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

const languages = [
    {
        code: 'en',
        name: 'English',
        country_code: 'gb'
    },
    {
        code: 'es',
        name: 'Español',
        country_code: 'es'
    }
]

const Navigation = () => {
    //World icon for language dropdown
    const worldIcon = (<i className="fas fa-globe" style={{color:"#003054"}}></i>)

    //Set language of page when use clicks on language options
    const [lang, setLang] = useState('English');
    const { t } = useTranslation();

    return (
    
        <Navbar expand='md' fixed='top' style={{padding:10, backgroundColor: 'rgba(255, 255, 255, 0.9)'}}>
            <Container>
                <Navbar.Brand href='/' to='/'>
                    <img src={logo} alt="diversified-tax-logo" style={logoStyle}></img>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls='navbarScroll'/>
                <Navbar.Collapse className='justify-content-around'>
                    <Nav.Link href="/personal-tax" style={links}>
                        {t('nav_personal')}
                    </Nav.Link>
                    <Nav.Link href="/business-tax" style={links}>
                        {t('nav_business')}
                    </Nav.Link>
                    <Nav.Link href="/contact-us" style={links}>
                        {t('nav_contact_us')}
                    </Nav.Link>
                    <NavDropdown title={worldIcon} style={{color:"#003054"}}>
                        {languages.map(({code, name, country_code})=>(
                            <NavDropdown.Item 
                                key={country_code} 
                                onClick={(e) =>{
                                    i18next.changeLanguage(code)
                                    setLang(e.currentTarget.innerHTML)}}
                                disabled={name === lang}
                                >
                                    {name}</NavDropdown.Item>
                        ))}
                    </NavDropdown>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navigation;

