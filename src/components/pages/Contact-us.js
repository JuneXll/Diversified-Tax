import React from 'react';
import { useTranslation } from 'react-i18next';
import { Container } from 'react-bootstrap';
import ContactForm from '../widgets/ContactForm';

//Header stylings 
const header = {
    color: 'white',
    fontFamily: 'Bebas Neue, tahoma',
    letterSpacing: '6px',
}
//Text stylings
const blueHeader = {
    fontFamily: 'Bebas Neue, tahoma',
    letterSpacing: '5px',
    color: '#003054'
}

const bodyFont = {
    color: 'white',
    fontFamily: 'Open Sans, san serif',
    letterSpacing: '2px'
}
//Div stylings for page
const blueDiv = {
    backgroundColor:'#003054', 
    borderRadius:'5px',
    boxShadow: '5px 5px 5px #ccc' 
}

const yellowDiv = {
    backgroundColor: '#e1ad00',
    borderRadius: '5px',
}

//Function showing ig feed
const showIG = () => {
    const igFeed = document.getElementById("ig-feed");
    const hostUrl = 'https://diversified.tax';
    // const hostUrl = 'https://diversified-tax.netlify.app';
    // const hostUrl = 'localhost: 3000'

    if(window.location.href === `${hostUrl}/contact-us`) {
        if(igFeed.style.display === 'none') {
            igFeed.style.display = 'block';
        } else {
            igFeed.style.display = 'none';
        }
    }

}

const Contact = () => {
    //Translations for the page
    const { t } = useTranslation();

    return (
        <div style={{paddingTop: 100}}>
            <div style={blueDiv}>
                <Container>
                    {/* Heading */}
                    <Container className='flex-column col-11 justify-content-center pt-4'>
                        <h1 style={header}>{t('contact_us_header')}</h1>
                    </Container>
                    {/* Contact us form */}
                    <Container className="p-4 d-flex justify-content-between row">
                        <Container className='p-3 mb-5 col-md-5 col-xs-12' style={yellowDiv}  id='contactForm'>
                            {/* Contact us form component */}
                            <ContactForm/>

                        </Container>
                        {/* Contact info */}
                        <Container className='flex-column col-md-5 col-xs-12 align-content-center p-3 mb-5' style={yellowDiv}>
                            <h3 style={blueHeader}>Diversified Tax</h3>
                            <p style={bodyFont}>7900 Oak Lane, ST 400</p>
                            <p style={bodyFont}>Miami Lakes, Florida 33016</p>
                            <br/>
                            <h3 style={blueHeader}>Ricardo Pachon</h3>
                            <p style={bodyFont}>(786)-527-5133</p>
                            <p style={bodyFont}>taxes@diversifiedtax.us</p>
                        </Container>
                    </Container>
                </Container>
                
            </div>

            {/* Instagram section */}
            <Container className='text-center'>
                <Container style={{marginTop:'15vh', marginBottom:'5vh'}}>
                    <h1 className='text-center text-black' style={header}>{t('ig_header')}</h1> 
                </Container>

                {showIG()}
            </Container>
        </div>
    )
}

export default Contact;
