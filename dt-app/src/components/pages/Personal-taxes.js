import React from 'react';
import { Container, Button, Image } from 'react-bootstrap';
import personalCover from '../../images/oldCalc.jpg';
import yellowCalc from '../../images/yellowCalc.jpeg';
import LinkDiv from '../widgets/LinkDiv';

const paddingTop = {
    paddingTop: 100
}

const jumbotronCover = {
    backgroundImage: `url(${personalCover})`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    height: '55vh',
    backgroundColor: '#003054',
    borderRadius: '5px',
    boxShadow: '5px 5px 5px #ccc'
  }

const coverP = {
    lineHeight: '1.5',
    letterSpacing: '2px',
    fontFamily: 'Open Sans, sans-serif',
    textAlign: 'right'
}

const coverHeading = {
    lineHeight: '2',
    letterSpacing: '4px',
    fontFamily: 'Bebas Neue, cursive',
    textAlign: 'right'
}

const yellowButton = {
    backgroundColor:'#e1ad00',
    fontFamily: 'Bebas Neue, cursive',
    letterSpacing: '4px',
    border: 'none',
    textAlign: 'align-right'
}

const paragraphs = {
    lineHeight: '1.5',
    letterSpacing: '2px',
    fontFamily: 'Open Sans, sans-serif',
}

const headings = {
    lineHeight: '2',
    letterSpacing: '4px',
    fontFamily: 'Bebas Neue, cursive',
}

const blueButton = {
    backgroundColor:'#003054',
    fontFamily: 'Bebas Neue, cursive',
    letterSpacing: '4px',
    border: 'none'
}

const Personal = () => {
    return (
        <div style={paddingTop}>
            <div>
                <div className="jumbotron jumbotron-fluid" style={jumbotronCover}>
                    <Container className='flex-column p-5 text-white'>
                        <h1 className='display-4' style={coverHeading}>Personal Taxes</h1>
                        <br/>
                        <h5 style={coverP}>24/7 Safe and</h5>
                        <h5 style={coverP}>Reliable Service</h5>

                        <Button href='/' style={yellowButton} className='my-3 flex-end'>File Today</Button>
                    </Container>
                </div>
            </div>

            {/* About Section */}
            <Container className='row p-5'>

                <Container className='col-lg-6 col-xs-12 flex-column p-5 '>
                    <h2 style={headings}>About Us</h2>
                    <p style={paragraphs}>Diversified Tax is a full-service professional tax preparation company dedicated to help you with all your personal and business needs. We provide consultations, bookkeeping, and most importantly, an accurate tax filing. We are backed by years of tax knowledge and we take pride in helping hundreds of people each year. When it comes to helping our clients, we hold ourselves to the highest standard. Diversified Tax works with all of our employees to build a culture of industry-leading tax preparers. </p>
                </Container>

                <Container className='col-lg-6 col-xs-12 text-center'>
                    <Image fluid className='col-10 mt-5' src={yellowCalc}/>
                </Container>

            </Container>

            {/* Additional Services */}
            <Container className='row p-5 m-1' style={{backgroundColor:'#003054', borderRadius:'5px', boxShadow: '5px 5px 5px #ccc'}}>

                <Container className='col-lg-6 col-xs-12 text-center'>
                    <Image fluid className='col-10' src={yellowCalc}/>
                </Container>

                <Container className='col-lg-6 col-xs-12 flex-column'>
                    <h2 className='text-white' style={headings}>Additional Services</h2>
                        <ul style={paragraphs} className='text-white'>
                            <li>Current and prior years</li>
                            <li>Federal 1040, all related schedules</li>
                            <li>All state returns, all related schedules</li>
                            <li>No upfront fees</li>
                            <li>Audit protection</li>
                            <li>Refund advances up to $7000. Subject to approval</li>
                        </ul>
                </Container>

            </Container>

            {/* Tax Checklist */}
            <Container className='row p-5 m-1' style={{backgroundColor:'#e1ad00', borderRadius:'5px', boxShadow: '5px 5px 5px #ccc'}}>

                <Container className='col-lg-6 col-xs-12 flex-column'>
                    <h2 className='text-white display-3' style={headings}>Not sure if you are ready to file taxes?</h2>
                    <Button href='/' className='my-3' style={blueButton}><i class="fas fa-arrow-down"></i>Tax Checklist</Button>
                </Container>

                <Container className='col-lg-6 col-xs-12 text-center'>
                    <Image fluid className='col-10' src={yellowCalc}/>
                </Container>

            </Container>

            {/* Links for getting started */}
            <LinkDiv/>
            {/* <Container>
                <Row className='d-flex justify-content-around'>

                    <Col className='col-xl-5 col-lg-5 col-md-8 col-sm-10 col-xs-12'>
                        <Card className='p-3 mb-3 text-white' style={{backgroundColor:'#003054',boxShadow: '5px 5px 5px #ccc'}}>
                            <Card.Header><h3 style={headings}>Personal Taxes</h3></Card.Header>
                            <Card.Img variant="top" src={yellowCalc} />
                        </Card>
                    </Col>
                    <Col className='col-xl-5 col-lg-5 col-md-8 col-sm-10 col-xs-12' >
                        <Card className='p-3 mb-3 text-white' style={{backgroundColor:'#003054',boxShadow: '5px 5px 5px #ccc'}}>
                            <Card.Header><h3 style={headings}>Business Taxes</h3></Card.Header>
                            <Card.Img variant="top" src={yellowCalc} />
                            
                        </Card>
                    </Col>
                    <Col className='col-xl-5 col-lg-5 col-md-8 col-sm-10 col-xs-12' >
                        <Card className='p-3 mb-3 text-white' style={{backgroundColor:'#003054',boxShadow: '5px 5px 5px #ccc'}}>
                            <Card.Header><h3 style={headings}>Business Taxes</h3></Card.Header>
                            <Card.Img variant="top" src={yellowCalc} />
                            
                        </Card>
                    </Col>
                </Row>
            </Container> */}

        </div>
    )
}

export default Personal;