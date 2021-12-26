import React from 'react';
import { useTranslation } from 'react-i18next';
// Bootstrap Components
import { Container, Button, Image, Row, Col, Card } from 'react-bootstrap';

// Imported images-imagekit.io as webp cdn
const jumbotronImg = 'https://ik.imagekit.io/diversifiedtax/images/jumbotron.png?updatedAt=1640391124338';
const aboutUsImg = 'https://ik.imagekit.io/diversifiedtax/images/about-us.png?updatedAt=1640390724180';
const whatWeDoImg = 'https://ik.imagekit.io/diversifiedtax/images/what-does-dt-do.png?updatedAt=1640385412027';
const fingertipsImg = 'https://ik.imagekit.io/diversifiedtax/images/fingertips.png?updatedAt=1640385371781';
const personalCardImg = 'https://ik.imagekit.io/diversifiedtax/images/personalCard.png?updatedAt=1640390885673';
const businessCardImg = 'https://ik.imagekit.io/diversifiedtax/images/businessCard.png?updatedAt=1640390876577';


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
const dtText = {
    fontFamily: 'Open Sans, sans-serif',
    color: 'white',
    letterSpacing: '4px',
    lineHeight: '1.5',
    fontSize: '52px'
}
const coverText = {
    fontFamily: 'Open Sans, sans-serif',
    color: 'white',
    letterSpacing: '4px',
    lineHeight: '1.5'
}
//Button styles
const yellowButton = {
    backgroundColor:'#e1ad00',
    fontFamily: 'Bebas Neue, tahoma',
    letterSpacing: '4px',
    border: 'none'
}

const blueButton = {
    backgroundColor:'#003054',
    fontFamily: 'Bebas Neue, tahoma',
    letterSpacing: '4px',
    border: 'none'
}
//Styles for text on page
const paragraphs = {
    lineHeight: '1.5',
    letterSpacing: '2px',
    fontFamily: 'Open Sans, sans-serif',
    textIndent: '20px'
}

const cardList = {
    lineHeight: '1.5',
    letterSpacing: '2px',
    fontFamily: 'Open Sans, sans-serif'
}

const headings = {
    lineHeight: '2',
    letterSpacing: '4px',
    fontFamily: 'Bebas Neue, tahoma'
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

    const { t } = useTranslation();

    return (
        <div style={paddingTop}>
            {/* Cover div */}
            <div>
                <div className="jumbotron jumbotron-fluid" style={jumbotronCover}>
                    <Container className='flex-column' style={{padding:'4em 0 0 3em'}} >
                        <h1 className='' style={dtText}>{t('main_jumbo_title')}</h1>
                        <h2 style={coverText}>{t('fist_jumbo_list')}</h2>
                        <h2 style={coverText}>{t('second_jumbo_list')}</h2>
                        <h2 style={coverText}>{t('third_jumbo_list')}</h2>

                        <Button href='/new-personal-clients' className='my-3' style={yellowButton}>{t('jumbo_button')}</Button>
                    </Container>

                </div>
            </div>
            {/* About Section */}
            <Container className='row p-5 my-5'>

                <Container className='col-lg-6 col-xs-12 text-center pb-2 my-auto'>
                    <Image fluid className='col-10' src={aboutUsImg} style={imgStyle} alt='Employee huddle with hands in the middle'/>
                </Container>

                <Container className='col-lg-6 col-xs-12 flex-column p-5'>
                    <h2 style={headings}>{t('about_header')}</h2>
                    <p style={paragraphs}>{t('about_content')}</p>
                </Container>

            </Container>

            {/* What does DT do? */}
            <Container className='row m-1' style={{backgroundColor:'#003054', borderRadius:'5px', boxShadow: '5px 5px 5px #ccc', padding:'5em 3em'}}>

                <Container className='col-lg-6 col-xs-12 flex-column p-5'>
                    <h2 className='text-white' style={headings}>{t('what_does_dt_header')}</h2>
                    <p className='text-white' style={paragraphs}>{t('what_does_dt_content')}</p>
                </Container>

                <Container className='col-lg-6 col-xs-12 text-center pt-2 my-auto'>
                    <Image fluid className='col-10' src={whatWeDoImg} style={{borderRadius:'5px'}} alt='Graphic of calculator with tax icons around'/>
                </Container>

            </Container>

            {/* We're always at your fingertips */}
            <Container className='row p-5 my-5'>

                <Container className='col-lg-6 col-xs-12 text-center pb-2 my-auto'>
                    <Image fluid className='col-10' src={fingertipsImg} style={imgStyle} alt='Smiling woman holding a phone'/>
                </Container>

                <Container className='col-lg-6 col-xs-12 flex-column p-5'>
                    <h2 style={headings}>{t('fingertips_header')}</h2>
                    <p style={paragraphs}>{t('fingertips_content')}</p>
                </Container>

            </Container>

            {/* Clients section*/}
            <Container>
                <Row className='d-flex justify-content-around'>
                    {/* Personal Tax Clients */}
                    <Col className='col-xl-5 col-lg-5 col-md-8 col-sm-10 col-xs-12'>
                        <Card className='p-3 mb-3 text-white' style={{backgroundColor:'#003054',boxShadow: '5px 5px 5px #ccc'}}>
                            <Card.Header><h3 style={headings}>{t('personal_header')}</h3></Card.Header>
                            <Card.Img variant="top" src={personalCardImg} style={{borderRadius:'5px'}} alt='Studious woman at the office reviewing tax papers'/>
                            <Card.Body>
                                <Card.Title style={headings}>{t('p_preparation_title')}</Card.Title>
                                <Card.Text style={cardList}>
                                    <ul>
                                        <li>{t('p_first_li')}</li>
                                        <li>{t('p_second_li')}</li>
                                        <li>{t('p_third_li')}</li>
                                        <li>{t('p_fourth_li')}</li>
                                        <li>{t('p_fifth_li')}</li>
                                        <li>{t('p_sixth_li')}</li>
                                    </ul>
                                </Card.Text>
                                <Button href='/personal-tax' className='my-3' style={yellowButton} aria-label='Go to personal tax page'>{t('personal_button')}</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    {/* Business tax Clients */}
                    <Col className='col-xl-5 col-lg-5 col-md-8 col-sm-10 col-xs-12' >
                        <Card className='p-3 mb-3 text-white' style={{backgroundColor:'#003054',boxShadow: '5px 5px 5px #ccc'}}>
                            <Card.Header><h3 style={headings}>{t('business_header')}</h3></Card.Header>
                            <Card.Img variant="top" src={businessCardImg} style={{borderRadius:'5px'}} alt='Happy coffee shop owners reviewing information on a computer'/>
                            <Card.Body>
                                <Card.Title style={headings}>{t('b_preparation_title')}</Card.Title>
                                <Card.Text style={cardList}>
                                    <ul>
                                        <li>{t('b_first_li')}</li>
                                        <li>{t('b_second_li')}</li>
                                        <li>{t('b_third_li')}</li>
                                        <li>{t('b_fourth_li')}</li>
                                        <li>{t('b_fifth_li')}</li>
                                    </ul>
                                </Card.Text>
                                <Button href='/business-tax' className='my-3' style={yellowButton} aria-label='Go to business tax page'>{t('business_button')}</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>

            {/* When you choose Dt.. */}
            <Container>
                <Container className='pt-3 my-5 text-center' style={{backgroundColor:'#e1ad00', borderRadius:'5px', boxShadow: '5px 5px 5px #ccc'}}>
                    <Container className='text-white'>
                        <h1 style={headings}>{t('when_you_choose_dt')}</h1>
                        <Row className='my-5'>
                            <Col>
                            <i className="fas fa-shield-alt fa-3x" style={iconsBlue}></i>
                            <p style={iconP}>{t('first_icon')}</p>
                            </Col>
                            <Col>
                            <i className="fas fa-globe fa-3x" style={iconsBlue}></i>
                            <p style={iconP}>{t('second_icon')}</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <i className="fas fa-concierge-bell fa-3x" style={iconsBlue}></i>
                                <p style={iconP}>{t('third_icon')}</p>
                            </Col>
                            <Col>
                                <i className="fas fa-user-clock fa-3x" style={iconsBlue}></i>
                                <p style={iconP}>{t('fourth_icon')}</p>
                            </Col>
                            <Col>
                                <i className="fas fa-file-alt fa-3x" style={iconsBlue}></i>
                                <p style={iconP}>{t('fifth_icon')}</p>
                            </Col>
                        </Row>
                        <Button href='/new-personal-clients' className='my-5' style={blueButton}>{t('choose_button')}</Button>
                    </Container>
                </Container>
            </Container>


        </div>
    )
}

export default Home;