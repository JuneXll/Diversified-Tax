import React from 'react';
import { Container, Button, Image } from 'react-bootstrap';
//Imported Images
import personalHeaderImg from '../../images/personal-header.png';
import formImg from '../../images/forms.png';
import howDoImg from '../../images/how-do-i-know.png';
import personalNewImg from '../../images/personal-new-client.png';
import personalReturningImg from '../../images/personal-returning.png';
import checklist1 from '../../images/Checklist1.png';
import checklist2 from '../../images/Checklist2.png';
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
    backgroundImage: `url(${personalHeaderImg})`,
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
    textAlign: 'justify'
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
//Img borderRadius and shadow
const imgStyle = {
    borderRadius: '5px',
    boxShadow: '5px 5px 5px #ccc'
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
                        <h5 style={coverP}>Safe and</h5>
                        <h5 style={coverP}>Reliable Service</h5>

                        <Button href='#linksCard' style={yellowButton} className='my-3 float-end'>File Today</Button>
                    </Container>
                </div>
            </div>

            {/* Income Section */}
            <Container className='row p-5'>

                <Container className='col-lg-6 col-xs-12 flex-column p-5 '>
                    <h2 style={headings}>Income from 1099/W-2/1098 etc.</h2>
                    <p style={paragraphs}>Diversified Tax works with all the common tax forms: 1099s, W-2s, and any other income tax form you may have received this year. All these documents should be uploaded, as applicable, for us to accurately complete your tax return. Providing these documents is as simple as snapping a photo and uploading it to the link provided by your tax agent. We also accept PDFs and excel documents. </p>
                </Container>

                <Container className='col-lg-6 col-xs-12 text-center mb-4'>
                    <Image fluid className='col-10 mt-4' src={formImg} style={imgStyle}/>
                </Container>

            </Container>

            {/* How do I know Section */}
            <Container className='row p-5 mx-1' style={{backgroundColor:'#003054', borderTopLeftRadius:'5px',borderTopRightRadius:'5px', boxShadow: '5px 5px 5px #ccc'}}>

                <Container className='col-lg-6 col-xs-12 text-center mb-4'>
                    <Image fluid className='col-10' src={howDoImg} style={{borderRadius:'5px'}}/>
                </Container>

                <Container className='col-lg-6 col-xs-12 flex-column align-center'>
                    <h2 className='text-white' style={headings}>How do you know what I need?</h2>
                    <p className='text-white p-2' style={paragraphs}>We ask that you provide us with a copy of your prior year tax return so that we may have a baseline to work with. Through discussion, you should make us aware of any new activity that needs to be modified in the current year. We may also discuss items that may have accidentally been missed in prior years as well as options to remedy the problem. Once you've used DT, relevant information will be saved within your profile.</p>
                </Container>

            </Container>

            {/* Tax Checklist */}
            <Container className='row p-5 mx-1' style={{backgroundColor:'#e1ad00', borderBottomLeftRadius:'5px',borderBottomRightRadius:'5px', boxShadow: '5px 5px 5px #ccc'}}>

                <Container className='col-lg-6 col-xs-12 flex-column'>
                    <h2 className='text-white display-3' style={headings}>Not sure if you are ready to file?</h2>
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
                <Container id='linksCard'></Container>
            </Container>

            {/* Links for getting started */}
            <Container className='my-5'>
                <h1 className='display-3 text-center' style={headings}>Get started today!</h1>
                    <LinkCard 
                        firstLink='New Clients' 
                        firstHref='/new-personal-clients'
                        firstSrc={personalNewImg}
                        secondLink='Returning Clients' 
                        secondHref='/returning-personal-clients'
                        secondSrc={personalReturningImg}
                        />
            </Container>
            
            {/* FAQ component*/}
            <Faq faq='personal'/>

        </div>
    )
}

export default Personal;