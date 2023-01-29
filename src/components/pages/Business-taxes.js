import React from 'react';
import { useTranslation } from 'react-i18next';
import { Container, Image, Row, Col} from 'react-bootstrap';
//Imported widgets
import Faq from '../widgets/Faq';
import ClientPortal from '../widgets/ClientPortal';

//Imported Images
const businessHeaderImg = 'https://ik.imagekit.io/diversifiedtax/images/business-header.png?updatedAt=1640385360004';
const outsideServicesImg = 'https://ik.imagekit.io/diversifiedtax/images/outside-services.png?updatedAt=1640385340053';
//const businessNewImg = 'https://ik.imagekit.io/diversifiedtax/images/business-new-client.png?updatedAt=1640385381552';
//const businessReturningImg = 'https://ik.imagekit.io/diversifiedtax/images/business-returning.png?updatedAt=1640385349651';

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
    objectPosition: '25% 50%',
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
    textIndent: '20px'
}

const lists = {
    lineHeight: '1.5',
    letterSpacing: '2px',
    fontFamily: 'Open Sans, sans-serif'
}


const Business = () => {

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
            <div style={{backgroundColor:'#003054', borderRadius: '5px', boxShadow: '5px 5px 5px #ccc', padding:'6em 3em', marginTop:'25vh'}}>
                <div className='position-relative'>
                    <div className='position-absolute top-0 start-50 translate-middle'style={picDiv}>
                        <Image fluid src={outsideServicesImg} style={img} alt='Coffee shop business owners working and smiling'/>
                    </div>
                </div>
                <div style={{paddingTop:'30vh'}}>
                    <h2 className='text-white text-center mb-3' style={serviceText}>{t('outside_services')}</h2>
                    <p className='text-white m-4' style={paragraphs}>{t('outside_content')}</p>
                    <Row>
                        <Col>
                            <ul style={lists} className='text-white'>
                                <li>{t('outside_first_li')}</li>
                                <li>{t('outside_second_li')}</li>
                                <li>{t('outside_third_li')}</li>
                                <li>{t('outside_fourth_li')}</li>
                                <li>{t('outside_fifth_li')}</li>
                                <li>{t('outside_sixth_li')}</li>
                            </ul>
                        </Col>
                        <Col>
                            <ul style={lists} className='text-white'>
                                <li>{t('outside_seventh_li')}</li>
                                <li>{t('outside_eighth_li')}</li>
                                <li>{t('outside_ninth_li')}</li>
                                <li>{t('outside_tenth_li')}</li>
                                <li>{t('outside_eleventh_li')}</li>
                                <li>{t('outside_twelfth_li')}</li>
                            </ul>
                        </Col>
                        <Col>
                            <ul style={lists} className='text-white'>
                                <li>{t('outside_thirteenth_li')}</li>
                                <li>{t('outside_fourteenth_li')}</li>
                                <li>{t('outside_fifteenth_li')}</li>
                                <li>{t('outside_sixteenth_li')}</li>
                                <li>{t('outside_seventeenth_li')}</li>
                            </ul>
                        </Col>
                    </Row>
        
                    </div>
                </div>

            {/* Client Portal*/}
            <Container style={{marginTop:'15vh'}}>
                <ClientPortal client='business'/>
            </Container>

            {/* Faq */}
            <Faq faq='business'/>

        </div>
    )
}

export default Business;