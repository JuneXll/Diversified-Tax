import React from 'react';
import { Container, Image, Row, Col } from 'react-bootstrap';
//Imported Images
import businessHeaderImg from '../../images/business-header.png';
import outsideServicesImg from '../../images/outside-services.png';
import businessNewImg from '../../images/business-new-client.png';
import businessReturningImg from '../../images/business-returning.png';
//Imported widgets
import LinkCard from '../widgets/LinkCard';
import Faq from '../widgets/Faq';

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
    fontFamily: 'Bebas Neue, cursive',
    textAlign: 'right',
    textDecoration: 'underline'
}

const headings = {
    lineHeight: '2',
    letterSpacing: '4px',
    fontFamily: 'Bebas Neue, cursive',
}

const serviceText = {
    letterSpacing: '2px',
    fontFamily: 'Bebas Neue, cursive',
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
    return (

        <div style={paddingTop}>
            {/* Header section */}
            <div style={blueDiv}>
                <h1 className='text-white text-center pt-5 m-5' style={coverHeading}>Your Business is safe with us</h1>
            </div>
            <div className='position-relative'>
                <div className='position-absolute top-0 start-50 translate-middle'style={picDiv}>
                    <Image fluid src={businessHeaderImg} style={img}/>
                </div>
            </div>

            {/* Tax Planning Section */}
            <Container style={{marginTop:'35vh', marginBottom:'15vh'}}>
                <h1 className='text-center' style={headings}>Tax Planning</h1>
                <p className='m-5' style={paragraphs}>Tax planning is critical to self-employed and small business taxpayers. It is the first step to ensuring you are paying the lowest amount of legal tax. There are many ways to structure a business to lower the overall tax rates. Entity choice, accounting method, financing structure, benefit plans are all looked at from a tax optimization perspective. The plan we create is reviewed against your actual results going forward and adjustments are suggested as they become necessary. </p>
            </Container>

            {/* Outside Services Section */}
            <Container>
                <Row>
                    <Col className='col-lg-6 col-md-12 col-sm-12' style={leftColumn}>
                        <Image fluid className='position-relative' src={outsideServicesImg} style={leftColumnPic}/>
                    </Col>
                    <Col className='col-lg-6 col-md-12 col-sm-12' style={rightColumn}>
                        <h2 className='text-white' style={serviceText}>Can I request services outside of income taxes?</h2>
                        <p className='text-white' style={paragraphs}>Currently, the only services that can be provided by DT are identified below. However, if you have an open job, you can reach out to us with any requests and we'll see what we can do to help you out. We are able to help you with the following services or even some that may not be listed here:</p>
                            <ul style={paragraphs} className='text-white'>
                                <li>Bookkeeping</li>
                                <li>Incorporation/Organization services</li>
                                <li>Estimates payment assistance</li>
                                <li>Occupancy tax assistance</li>
                                <li>Notary Services</li>
                            </ul>
                    </Col>
                </Row>
            </Container>

            {/* Links for getting started */}
            <Container className='my-5'>
                <h1 className='display-3 text-center' style={headings}>Get started today!</h1>
                    <LinkCard 
                        firstLink='New Clients' 
                        firstHref='/new-business-clients'
                        firstSrc={businessNewImg}
                        secondLink='Returning Clients' 
                        secondHref='/returning-business-clients'
                        secondSrc={businessReturningImg}/>
            </Container>

            {/* Faq */}
            <Faq faq='business'/>

        </div>
    )
}

export default Business;