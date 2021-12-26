import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
//Importing logo from imagekit
const logo = 'https://ik.imagekit.io/diversifiedtax/images/logo.png?updatedAt=1640385434649';

const logoStyle = {
    width: 80,
    height: 65,
    borderRadius: 5,
    boxShadow: '5px 5px 5px #ccc'
}

const links = {
    color: '#003054',
    fontFamily: 'Bebas Neue, tahoma',
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
    const worldIcon = (<i className="fas fa-globe" style={{color:"#003054"}} role='menu' aria-label='Language Menu'></i>)

    //Set language of page when use clicks on language options or by cookie
    let cookie = document.cookie
        .split(';')
        .map(cookie=> cookie.split('='))
        .reduce((accumulator, [key,value]) => 
            ({ ...accumulator, [key.trim()]:decodeURIComponent(value) }),
            {});
    let langCookie = cookie.i18next;
    const [lang, setLang] = useState(langCookie);
    const { t } = useTranslation();

    return (
    
        <Navbar expand='md' fixed='top' style={{padding:10, backgroundColor: 'rgba(255, 255, 255, 0.9)'}}>
            <Container>
                <Navbar.Brand href='/' to='/' aria-labelledby='Diversified Tax Homepage'>
                    <img src={logo} alt="diversified-tax-logo" style={logoStyle}></img>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls='navbarScroll'/>
                <Navbar.Collapse className='justify-content-around'>
                    <Nav.Link href="/personal-tax" style={links} aria-labelledby='Personal Taxes'>
                        {t('nav_personal')}
                    </Nav.Link>
                    <Nav.Link href="/business-tax" style={links} aria-labelledby='Business Taxes'>
                        {t('nav_business')}
                    </Nav.Link>
                    <Nav.Link href="/contact-us" style={links} aria-labelledby='Contact Us'>
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
                                aria-label={`Language: ${name}`}
                                role='menuitem'
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

