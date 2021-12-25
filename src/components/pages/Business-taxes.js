import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Container, Image, Row, Col } from 'react-bootstrap';
//Imported widgets
import LinkCard from '../widgets/LinkCard';
import Faq from '../widgets/Faq';
//Imported Images
const businessHeaderImg = 'https://ik.imagekit.io/tr:w-560/diversifiedtax/images/business-header.png?updatedAt=1640385360004';
const outsideServicesImg = 'https://ik.imagekit.io/tr:w-560/diversifiedtax/images/outside-services.png?updatedAt=1640385340053';
const businessNewImg = 'https://ik.imagekit.io/tr:w-300/diversifiedtax/images/business-new-client.png?updatedAt=1640385381552';
const businessReturningImg = 'https://ik.imagekit.io/tr:w-300/diversifiedtax/images/business-returning.png?updatedAt=1640385349651';


// Styles for page
//Set padding for to make space for navbar
const paddingTop = {
    paddingTop: 75
}
//Styles for main top div
const blueDiv = {
    backgroundColor: '#003054',
    borderRadius: '5px',
    width: '100wv',
    height: '50vh',
    boxShadow: '5px 5px 5px #ccc'
}

const picDiv = {
    width: '50%',
    height: '45vh',
}

const img = {
    objectFit: 'cover',
    width: '100%',
    height: '100%',
    borderRadius: '5px'
}
//Text stylings
const coverHeading = {
    lineHeight: '2',
    letterSpacing: '6px',
    fontFamily: 'Bebas Neue, tahoma',
    textAlign: 'right',
    textDecoration: 'underline'
}

const headings = {
    lineHeight: '2',
    letterSpacing: '4px',
    fontFamily: 'Bebas Neue, tahoma',
}

const serviceText = {
    letterSpacing: '2px',
    fontFamily: 'Bebas Neue, tahoma',
}

const paragraphs = {
    lineHeight: '1.5',
    letterSpacing: '2px',
    fontFamily: 'Open Sans, sans-serif',
    textAlign: 'justify'
}
//Styles for pic/ text yellow dic]v
const leftColumn = {
    padding: '0',
    boxShadow: '5px 5px 5px #ccc'
}

const leftColumnPic = {
    borderTopLeftRadius: '5px',
    borderBottomLeftRadius: '5px'
}

const rightColumn = {
    padding: '4em 3em',
    borderTopRightRadius: '5px',
    borderBottomRightRadius: '5px',
    backgroundColor: '#e1ad00',
    boxShadow: '5px 5px 5px #ccc'
}


const Business = () => {
    //Sets state for smaller devices
    const [matches, setMatches] = useState(window.matchMedia("(min-width:580px)").matches)
    //Updates when change occurs
    useEffect(()=>{
        window
        .matchMedia("(min-width:580px)")
        .addEventListener('change', e => setMatches(e.matches));
    }, []);

    //Sets translations for the page
    const { t } = useTranslation();

    return (

        <div style={paddingTop}>
            {/* Header section */}
            <div style={blueDiv}>
                <h1 className='text-white text-center pt-5 m-5' style={coverHeading}>{t('b_page_header')}</h1>
            </div>
            <div className='position-relative'>
                <div className='position-absolute top-0 start-50 translate-middle'style={picDiv}>
                    <Image fluid src={businessHeaderImg} style={img} alt='Coffee shop business owners working and smiling'/>
                </div>
            </div>

            {/* Tax Planning Section */}
            <Container style={{marginTop:'35vh', marginBottom:'15vh'}}>
                <h1 className='text-center' style={headings}>{t('b_tax_plan')}</h1>
                <p className='m-5' style={paragraphs}>{t('b_tax_plan_content')}</p>
            </Container>

            {/* Outside Services Section */}
            <Container>
                <Row>
                    {matches && (
                    <Col className='col-lg-6 col-md-12 col-sm-12' style={leftColumn}>
                        <Image fluid className='position-relative' src={outsideServicesImg} style={leftColumnPic} alt='Pens on top of a calculator'/>
                    </Col>
                    )}
                    <Col className='col-lg-6 col-md-12 col-sm-12' style={rightColumn}>
                        <h2 className='text-white' style={serviceText}>{t('outside_services')}</h2>
                        <p className='text-white' style={paragraphs}>{t('outside_content')}</p>
                            <ul style={paragraphs} className='text-white'>
                                <li>{t('outside_first_li')}</li>
                                <li>{t('outside_second_li')}</li>
                                <li>{t('outside_third_li')}</li>
                                <li>{t('outside_fourth_li')}</li>
                                <li>{t('outside_fifth_li')}</li>
                            </ul>
                    </Col>
                </Row>
            </Container>

            {/* Links for getting started */}
            <Container className='my-5'>
                <h1 className='display-3 text-center' style={headings}>{t('b_get_started')}</h1>
                    <LinkCard 
                        firstLink={t('link_card_new_clients')} 
                        firstHref='/new-business-clients'
                        firstSrc={businessNewImg}
                        secondLink={t('link_card_returning_clients')} 
                        secondHref='/returning-business-clients'
                        secondSrc={businessReturningImg}/>
            </Container>

            {/* Faq */}
            <Faq faq='business'/>

        </div>
    )
}

export default Business;