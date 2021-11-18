import React from 'react';
import { Container, Image, Row, Col } from 'react-bootstrap';
//Imported Images
import personalCover from '../../images/oldCalc.jpg';
//Imported widgets
import LinkDiv from '../widgets/LinkDiv';
import Faq from '../widgets/Faq';

// Styles for page
//Set padding for to make space for navbar
const paddingTop = {
    paddingTop: 100
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

const paragraphs = {
    lineHeight: '1.5',
    letterSpacing: '2px',
    fontFamily: 'Open Sans, sans-serif'
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
    padding: '0',
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
                <h1 className='text-white text-center pt-5 m-5' style={coverHeading}>Your Business is safe with us.</h1>
            </div>
            <div className='position-relative'>
                <div className='position-absolute top-0 start-50 translate-middle'style={picDiv}>
                    <Image fluid src={personalCover} style={img}/>
                </div>
            </div>

            {/* Tax Planning Section */}
            <Container style={{marginTop:'35vh', marginBottom:'15vh'}}>
                <h1 className='text-center' style={headings}>Tax Planning</h1>
                <p className='m-5' style={paragraphs}>Tax planning is critical to self-employed and small business taxpayers. It is the first step to ensuring you are paying the lowest amount of legal tax. There are many ways to structure a business to lower the overall tax rates. Entity choice, accounting method, financing structure, benefit plans are all looked at from a tax optimization perspective. The plan we create is reviewed against your actual results going forward and adjustments are suggested as they become necessary. </p>
            </Container>

            {/* Section */}
            <Container>
                <Row>
                    <Col style={leftColumn}>
                        <Image fluid className='position-relative' src={personalCover} style={leftColumnPic}/>
                    </Col>
                    <Col className='p-5' style={rightColumn}>
                        <h2 className='text-white' style={headings}>Additional Services</h2>
                            <ul style={paragraphs} className='text-white'>
                                <li>Current and prior years</li>
                                <li>Federal 1040, all related schedules</li>
                                <li>All state returns, all related schedules</li>
                                <li>No upfront fees</li>
                                <li>Audit protection</li>
                                <li>Refund advances up to $7000. Subject to approval</li>
                            </ul>
                    </Col>
                </Row>
            </Container>

            {/* Links for getting started */}
            <Container className='my-5'>
                <h1 className='display-3 text-center' style={headings}>Get started today!</h1>
                    <LinkDiv firstLink='New Business Clients' secondLink='Returning Business Clients' thirdLink='Submit Extra Forms'/>
            </Container>

            {/* Faq */}
            <Faq/>

        </div>
    )
}

export default Business;