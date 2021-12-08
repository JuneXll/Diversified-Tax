import React from 'react';
import { useTranslation } from 'react-i18next';
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

    const { t } = useTranslation();

    return (
        <div style={paddingTop}>
            {/* Jumbotron Section */}
            <div>
                <div className="jumbotron jumbotron-fluid" style={jumbotronCover}>
                    <Container className='flex-column p-5 text-white'>
                        <h1 className='display-4' id='p-cover-heading' style={coverHeading}>{t('p_page_cover')}</h1>
                        <br/>
                        <h5 style={coverP}>{t('p_first_header')}</h5>
                        <h5 style={coverP}>{t('p_second_header')}</h5>

                        <Button href='#linksCard' style={yellowButton} className='my-3 float-end'>{t('p_cover_button')}</Button>
                    </Container>
                </div>
            </div>

            {/* Income Section */}
            <Container className='row p-5 my-5'>

                <Container className='col-lg-6 col-xs-12 flex-column p-3'>
                    <h2 style={headings}>{t('p_income')}</h2>
                    <p style={paragraphs}>{t('p_income_content')}</p>
                </Container>

                <Container className='col-lg-6 col-xs-12 text-center pt-2'>
                    <Image fluid className='col-10' src={formImg} style={imgStyle}/>
                </Container>

            </Container>

            {/* How do I know Section */}
            <Container className='row mx-1' style={{backgroundColor:'#003054', borderTopLeftRadius:'5px',borderTopRightRadius:'5px', boxShadow: '5px 5px 5px #ccc', padding:'5em 3em'}}>

                <Container className='col-lg-6 col-xs-12 text-center pb-2'>
                    <Image fluid className='col-10' src={howDoImg} style={{borderRadius:'5px'}}/>
                </Container>

                <Container className='col-lg-6 col-xs-12 flex-column p-3'>
                    <h2 className='text-white' style={headings}>{t('how_do_i_know')}</h2>
                    <p className='text-white' style={paragraphs}>{t('how_do_content')}</p>
                </Container>

            </Container>

            {/* Tax Checklist */}
            <Container className='row mx-1' style={{backgroundColor:'#e1ad00', borderBottomLeftRadius:'5px',borderBottomRightRadius:'5px', boxShadow: '5px 5px 5px #ccc', padding:'4em 3em'}}>

                <Container className='col-lg-6 col-xs-12 flex-column pb-2'>
                    <h2 className='text-white display-3' style={headings}>{t('not_sure')}</h2>
                    <Button href='https://drive.google.com/file/d/1jT7Yf0uZjlgECPA82-9UUjUlZxYxi7Sn/view' target='_blank' className='my-3' style={blueButton}><i className="fas fa-arrow-down m-1"></i>{t('tax_checklist')}</Button>
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
                <h1 className='display-3 text-center' style={headings}>{t('p_get_started')}</h1>
                    <LinkCard 
                        firstLink={t('link_card_new_clients')} 
                        firstHref='/new-personal-clients'
                        firstSrc={personalNewImg}
                        secondLink={t('link_card_returning_clients')} 
                        secondHref='/returning-personal-clients'
                        secondSrc={personalReturningImg}
                        />
            </Container>
            
            {/* FAQ component*/}
            <Faq faq='personal' />

        </div>
    )
}

export default Personal;

// lang={document.getElementById('p-cover-heading').textContent === "Personal Taxes" ? console.log('en') : console.log('es')}