import React from 'react';
import { Container, Button, Image } from 'react-bootstrap';
//Imported Images
import personalCover from '../../images/oldCalc.jpg';
import yellowCalc from '../../images/yellowCalc.jpeg';
import checklist1 from '../../images/Checklist1.png'
import checklist2 from '../../images/Checklist2.png'
//Imported widgets
import LinkCard from '../widgets/LinkCard';
import Faq from '../widgets/Faq';

// Styles for page
//Set padding for to make space for navbar
const paddingTop = {
    paddingTop: 100
}
//Jumbotron image styles
const jumbotronCover = {
    backgroundImage: `url(${personalCover})`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    height: '55vh',
    backgroundColor: '#003054',
    borderRadius: '5px',
    boxShadow: '5px 5px 5px #ccc'
  }
//Styles for jumbotron text
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
//Button styles
const yellowButton = {
    backgroundColor:'#e1ad00',
    fontFamily: 'Bebas Neue, cursive',
    letterSpacing: '4px',
    border: 'none',
    textAlign: 'align-right'
}

const blueButton = {
    backgroundColor:'#003054',
    fontFamily: 'Bebas Neue, cursive',
    letterSpacing: '4px',
    border: 'none'
}

//Set styles for text on page
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
//Checklist image styles
const checklist1Style = {
    width:'280px',
    height: '380px',
    position: 'relative',
    cursor: 'pointer',
    transform: 'rotate(-5deg)'
}

const checklist2Style = {
    width:'280px',
    height: '380px',
    position: 'absolute',
    transform: 'rotate(15deg)',
    cursor: 'pointer',
    marginRight:'50px'
}
//Function that opens new window for checklist onClick
const dlChecklist = (e) => {
    window.open('https://drive.google.com/file/d/1jT7Yf0uZjlgECPA82-9UUjUlZxYxi7Sn/view');

}

const Personal = () => {
    return (
        <div style={paddingTop}>
            {/* Jumbotron Section */}
            <div>
                <div className="jumbotron jumbotron-fluid" style={jumbotronCover}>
                    <Container className='flex-column p-5 text-white'>
                        <h1 className='display-4' style={coverHeading}>Personal Taxes</h1>
                        <br/>
                        <h5 style={coverP}>24/7 Safe and</h5>
                        <h5 style={coverP}>Reliable Service</h5>

                        <Button href='/' style={yellowButton} className='my-3 float-end'>File Today</Button>
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
            <Container className='row p-5 mx-1' style={{backgroundColor:'#003054', borderTopLeftRadius:'5px',borderTopRightRadius:'5px', boxShadow: '5px 5px 5px #ccc'}}>

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
            <Container className='row p-5 mx-1' style={{backgroundColor:'#e1ad00', borderBottomLeftRadius:'5px',borderBottomRightRadius:'5px', boxShadow: '5px 5px 5px #ccc'}}>

                <Container className='col-lg-6 col-xs-12 flex-column'>
                    <h2 className='text-white display-3' style={headings}>Not sure if you are ready to file taxes?</h2>
                    <Button href='https://drive.google.com/file/d/1jT7Yf0uZjlgECPA82-9UUjUlZxYxi7Sn/view' target='_blank' className='my-3' style={blueButton}><i className="fas fa-arrow-down m-1"></i>Tax Checklist</Button>
                </Container>
                {/* Container for checklist images */}
                <Container className='col-lg-6 col-xs-12 text-center'>
                    <Container className='p-5 m-1'>
                        <Image 
                            className='col-10' 
                            src={checklist2} 
                            style={checklist2Style} alt='diversified-tax-checklist2'
                            onClick={dlChecklist}/>
                        <Image 
                            className='col-10' 
                            src={checklist1} 
                            style={checklist1Style} alt='diversified-tax-checklist1'
                            onClick={dlChecklist}/>
                    </Container>
                </Container>

            </Container>

            {/* Links for getting started */}
            <Container className='my-5'>
                <h1 className='display-3 text-center' style={headings}>Get started today!</h1>
                    <LinkCard firstLink='New Personal Clients' secondLink='Returning Personal Clients' thirdLink='Submit Extra Forms'/>
            </Container>
            
            {/* FAQ component*/}
            <Faq faq='personal'/>

        </div>
    )
}

export default Personal;