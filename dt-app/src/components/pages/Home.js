import React from 'react';
import { Container, Button, Image, Row, Col, Card } from 'react-bootstrap';
// Imported images
import jumbotronImg from '../../images/jumbotron.png';
import aboutUsImg from '../../images/about-us.png';
import whatWeDoImg from '../../images/what-does-dt-do.png';
import fingertipsImg from '../../images/fingertips.png';
import personalCardImg from '../../images/personalCard.png';
import businessCardImg from '../../images/businessCard.png';

// Styles for page
//Set padding for to make space for navbar
const paddingTop = {
    paddingTop: 100
}
//Jumbotron image styles
const jumbotronCover = {
    backgroundImage: `url(${jumbotronImg})`,
    backgroundSize: 'cover',
    height: '75vh',
    borderRadius: '5px',
    boxShadow: '5px 5px 5px #ccc'
  }
//Jumbotron cover text styles
const coverText = {
    fontFamily: 'Open Sans, sans-serif',
    color: 'white',
    letterSpacing: '4px',
    lineHeight: '1.5'
}
//Button styles
const yellowButton = {
    backgroundColor:'#e1ad00',
    fontFamily: 'Bebas Neue, cursive',
    letterSpacing: '4px',
    border: 'none'
}

const blueButton = {
    backgroundColor:'#003054',
    fontFamily: 'Bebas Neue, cursive',
    letterSpacing: '4px',
    border: 'none'
}
//Styles for text on page
const paragraphs = {
    textAlign: 'justify',
    lineHeight: '1.5',
    letterSpacing: '2px',
    fontFamily: 'Open Sans, sans-serif'
}

const cardList = {
    lineHeight: '1.5',
    letterSpacing: '2px',
    fontFamily: 'Open Sans, sans-serif'
}

const headings = {
    lineHeight: '2',
    letterSpacing: '4px',
    fontFamily: 'Bebas Neue, cursive'
}
//Icon styles
const iconsBlue = {
    color: '#003054'
}

const iconP = {
    margin: '5px',
    letterSpacing: '2px',
    fontFamily: 'Open Sans, sans-serif'
}
//Img borderRadius and shadow
const imgStyle = {
    borderRadius: '5px',
    boxShadow: '5px 5px 5px #ccc'
}

const Home = () => {
    return (
        <div style={paddingTop}>
            {/* Cover div */}
            <div>
                <div className="jumbotron jumbotron-fluid" style={jumbotronCover}>
                    <Container className='flex-column' style={{padding:'6em 0 0 2em'}} >
                        <h1 style={coverText}>Expert Attention</h1>
                        <h1 style={coverText}>Accurate Calculations</h1>
                        <h1 style={coverText}>Maximum Refund</h1>

                        <Button href='/new-personal-clients' className='my-3' style={yellowButton}>File Today</Button>
                    </Container>

                </div>
            </div>
            {/* About Section */}
            <Container className='row p-5'>

                <Container className='col-lg-6 col-xs-12 text-center align-center'>
                    <Image fluid className='col-10 mt-5' src={aboutUsImg} style={imgStyle}/>
                </Container>

                <Container className='col-lg-6 col-xs-12 flex-column p-5 '>
                    <h2 style={headings}>About Us</h2>
                    <p style={paragraphs}>Diversified Tax is a full-service professional tax preparation company dedicated to help with all your personal and business needs. We provide consultations, bookkeeping, LLC and Corporation (S and C) openings, accurate tax filings and more. We are backed by years of tax knowledge and we take pride in helping hundreds of people and businesses each year. When it comes to helping our clients, we hold ourselves to the highest standard. Diversified Tax works to build a culture of industry-leading tax preparers. </p>
                </Container>

            </Container>

            {/* What does DT do? */}
            <Container className='row p-5 m-1' style={{backgroundColor:'#003054', borderRadius:'5px', boxShadow: '5px 5px 5px #ccc'}}>

                <Container className='col-lg-6 col-xs-12 flex-column p-5 '>
                    <h2 className='text-white' style={headings}>What does Diversified Tax do?</h2>
                    <p className='text-white' style={paragraphs}>Diversified Tax makes filing your taxes easier than ever before. What’s easier than having a professional file your taxes for you? Nothing, so you don’t have to worry about a thing. We have customized the customer benefits of the on-demand economy with convenience, security and cost savings and applied it to our tax business. We take all the hassle out of doing taxes to ensure you receive the personalized experience you desire.</p>
                </Container>

                <Container className='col-lg-6 col-xs-12 text-center'>
                    <Image fluid className='col-10 mt-4' src={whatWeDoImg} style={{borderRadius:'5px'}}/>
                </Container>

            </Container>

            {/* We're always at your fingertips */}
            <Container className='row p-5' style={{marginBottom:'3em', marginTop: '3em'}}>

                <Container className='col-lg-6 col-xs-12 text-center'>
                    <Image fluid className='col-10 mt-4' src={fingertipsImg} style={imgStyle}/>
                </Container>

                <Container className='col-lg-6 col-xs-12 flex-column p-5'>
                    <h2 style={headings}>We're always at your fingertips</h2>
                    <p style={paragraphs}>We are available 24/7 to pick up any requests submitted. We are always available through phone or email and respond to all inquiries that require a follow-up in a timely manner. We make every effort to reply as soon as we can, however, please note that DT is located within the eastern time zone, therefore response times may lag during late evenings and early morning hours.</p>
                </Container>

            </Container>

            {/* Clients section*/}
            <Container>
                <Row className='d-flex justify-content-around'>
                    {/* Personal Tax Clients */}
                    <Col className='col-xl-5 col-lg-5 col-md-8 col-sm-10 col-xs-12'>
                        <Card className='p-3 mb-3 text-white' style={{backgroundColor:'#003054',boxShadow: '5px 5px 5px #ccc'}}>
                            <Card.Header><h3 style={headings}>Personal Taxes</h3></Card.Header>
                            <Card.Img variant="top" src={personalCardImg} style={{borderRadius:'5px'}}/>
                            <Card.Body>
                                <Card.Title style={headings}>Preparation Services</Card.Title>
                                <Card.Text style={cardList}>
                                    <ul>
                                        <li>Current and prior years</li>
                                        <li>Federal 1040, all related schedules</li>
                                        <li>All state returns, all related schedules</li>
                                        <li>No upfront fees</li>
                                        <li>Audit protection</li>
                                        <li>Refund advances. Subject to approval</li>
                                    </ul>
                                </Card.Text>
                                <Button href='/personal-tax' className='my-3' style={yellowButton}>Learn More</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    {/* Business tax Clients */}
                    <Col className='col-xl-5 col-lg-5 col-md-8 col-sm-10 col-xs-12' >
                        <Card className='p-3 mb-3 text-white' style={{backgroundColor:'#003054',boxShadow: '5px 5px 5px #ccc'}}>
                            <Card.Header><h3 style={headings}>Business Taxes</h3></Card.Header>
                            <Card.Img variant="top" src={businessCardImg} style={{borderRadius:'5px'}}/>
                            <Card.Body>
                                <Card.Title style={headings}>Preparation Services</Card.Title>
                                <Card.Text style={cardList}>
                                    <ul>
                                        <li>EIN filing and filing with corresponding state</li>
                                        <li>Year round bookkeeping</li>
                                        <li>Single member LLC's, sole proprietor</li>
                                        <li>Partnerships, mutli-member LLC as partnership or corporation, all schedules </li>
                                        <li>Corporations, C or S, all schedules</li>
                                    </ul>
                                </Card.Text>
                                <Button href='/business-tax' className='my-3' style={yellowButton}>Learn More</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>

            {/* When you choose Dt.. */}
            <Container>
                <Container className='my-5 text-center' style={{backgroundColor:'#e1ad00', borderRadius:'5px', boxShadow: '5px 5px 5px #ccc'}}>
                    <Container className='text-white'>
                        <h1 style={headings}>When you choose Diversified Tax, you choose</h1>
                        <Row className='my-5'>
                            <Col>
                            <i className="fas fa-shield-alt fa-3x" style={iconsBlue}></i>
                            <p style={iconP}>Reliable Tax Professionals</p>
                            </Col>
                            <Col>
                            <i className="fas fa-globe fa-3x" style={iconsBlue}></i>
                            <p style={iconP}>Multilingual Employees</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <i className="fas fa-concierge-bell fa-3x" style={iconsBlue}></i>
                                <p style={iconP}>Personalized Customer Service</p>
                            </Col>
                            <Col>
                                <i className="fas fa-user-clock fa-3x" style={iconsBlue}></i>
                                <p style={iconP}>Quick Responses</p>
                            </Col>
                            <Col>
                                <i className="fas fa-file-alt fa-3x" style={iconsBlue}></i>
                                <p style={iconP}>IRS e-file Authorized Filer</p>
                            </Col>
                        </Row>
                        <Button href='/new-personal-clients' className='my-5' style={blueButton}>File Today</Button>
                    </Container>
                </Container>
            </Container>


        </div>
    )
}

export default Home;