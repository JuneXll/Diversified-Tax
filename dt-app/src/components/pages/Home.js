import React from 'react';
import { Container, Button, Image, Row, Col, Card } from 'react-bootstrap';
import homeCover from '../../images/homeCover.png';
import yellowCalc from '../../images/yellowCalc.jpeg';

// Styles for page
//Set padding for to make space for navbar
const paddingTop = {
    paddingTop: 100
}
//Jumbotron image styles
const jumbotronCover = {
    backgroundImage: `url(${homeCover})`,
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

const Home = () => {
    return (
        <div style={paddingTop}>
            {/* Cover div */}
            <div>
                <div className="jumbotron jumbotron-fluid" style={jumbotronCover}>
                    <Container className='flex-column p-5'>
                        <h1 style={coverText}>Qualified Help</h1>
                        <h1 style={coverText}>Accurate Calculations</h1>
                        <h1 style={coverText}>Maximum Refund</h1>

                        <Button href='/new-personal-clients' className='my-3' style={yellowButton}>File Today</Button>
                    </Container>

                </div>
            </div>
            {/* About Section */}
            <Container className='row p-5'>

                <Container className='col-lg-6 col-xs-12 text-center'>
                    <Image fluid className='col-10 mt-5' src={yellowCalc}/>
                </Container>

                <Container className='col-lg-6 col-xs-12 flex-column p-5 '>
                    <h2 style={headings}>About Us</h2>
                    <p style={paragraphs}>Diversified Tax is a full-service professional tax preparation company dedicated to help you with all your personal and business needs. We provide consultations, bookkeeping, and most importantly, an accurate tax filing. We are backed by years of tax knowledge and we take pride in helping hundreds of people each year. When it comes to helping our clients, we hold ourselves to the highest standard. Diversified Tax works with all of our employees to build a culture of industry-leading tax preparers. </p>
                </Container>

            </Container>

            {/* How does DT work section */}
            <Container className='row p-5 m-1' style={{backgroundColor:'#003054', borderRadius:'5px', boxShadow: '5px 5px 5px #ccc'}}>

                <Container className='col-lg-6 col-xs-12 flex-column p-5 '>
                    <h2 className='text-white' style={headings}>How Does Diversified Tax Work?</h2>
                    <p className='text-white' style={paragraphs}>Diversified Tax  makes filing your taxes easier than ever before. The easiest way to file your taxes is to have someone file them for you. We have blended the customer benefits of the on-demand economy (convenience, personalized experience, security, cost savings, and higher quality service) and applied it to the tax industry. We take all the hassle out of doing taxes to ensure you receive the personalized experience you desire. </p>
                </Container>

                <Container className='col-lg-6 col-xs-12 text-center'>
                    <Image fluid className='col-10 mt-5' src={yellowCalc}/>
                </Container>

            </Container>

            {/* Tax planning section */}
            <Container className='row p-5'>

                <Container className='col-lg-6 col-xs-12 text-center'>
                    <Image fluid className='col-10 mt-5' src={yellowCalc}/>
                </Container>

                <Container className='col-lg-6 col-xs-12 flex-column p-5 '>
                    <h2 style={headings}>Tax Planning</h2>
                    <p style={paragraphs}>Tax planning is critical to self-employed and small business taxpayers. It is the first step to ensuring you are paying the lowest amount of legal tax. There are many ways to structure a business to lower the overall tax rates. Entity choice, accounting method, financing structure, benefit plans are all looked at from a tax optimization perspective. The plan we create is reviewed against your actual results going forward and adjustments are suggested as they become necessary. </p>
                </Container>

            </Container>

            {/* Clients section*/}
            <Container>
                <Row className='d-flex justify-content-around'>
                    {/* Personal Tax Clients */}
                    <Col className='col-xl-5 col-lg-5 col-md-8 col-sm-10 col-xs-12'>
                        <Card className='p-3 mb-3 text-white' style={{backgroundColor:'#003054',boxShadow: '5px 5px 5px #ccc'}}>
                            <Card.Header><h3 style={headings}>Personal Taxes</h3></Card.Header>
                            <Card.Img variant="top" src={yellowCalc} />
                            <Card.Body>
                                <Card.Title style={headings}>Preparation Services</Card.Title>
                                <Card.Text style={paragraphs}>
                                    <ul>
                                        <li>Current and prior years</li>
                                        <li>Federal 1040, all related schedules</li>
                                        <li>All state returns, all related schedules</li>
                                        <li>No upfront fees</li>
                                        <li>Audit protection</li>
                                        <li>Refund advances up to $7000. Subject to approval</li>
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
                            <Card.Img variant="top" src={yellowCalc} />
                            <Card.Body>
                                <Card.Title style={headings}>Preparation Services</Card.Title>
                                <Card.Text style={paragraphs}>
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
                        <Button href='/' className='my-5' style={blueButton}>File Today</Button>
                    </Container>
                </Container>
            </Container>


        </div>
    )
}

export default Home;