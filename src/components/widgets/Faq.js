import React from 'react';
import { Container} from 'react-bootstrap';
//Import questions 
import { personalFaq } from '../../questionData/personalFaq';
import { businessFaq } from '../../questionData/businessFaq';
//Spanish
import { esPersonalFaq } from '../../questionData/esPersonalFaq';
import { esBusinessFaq } from '../../questionData/esBusinessFaq';
//import accordion effect
import Accordion from './Accordion';


const headings = {
    lineHeight: '2',
    letterSpacing: '10px',
    fontFamily: 'Bebas Neue, tahoma',
    color: 'white'
}

const questionDiv = {
    backgroundColor: '#e1ad00',
    borderRadius: '5px',
    boxShadow: '5px 5px 5px #ccc',
    marginTop: '7em'
}

const Faq = (props) => {
    //Retrieves all cookies and deconstructed into object, then targets cookie from i18next
    let cookie = document.cookie
        .split(';')
        .map(cookie=> cookie.split('='))
        .reduce((accumulator, [key,value]) => 
            ({ ...accumulator, [key.trim()]:decodeURIComponent(value) }),
            {});
    let langCookie = cookie.i18next;

    const renderQuestion = (question) => {
        return(
            <Accordion quest={question.question} ans={question.answer}/> 
        )
    }

    return(
        <Container className='p-3' style={questionDiv}>
            <h1 className='text-center' style={headings}>FAQ</h1>
            {/* If langCookie is equal to 'en' then will factor if personal or business english questions render if not spanish will render */}
            {langCookie === 'en' ? 
                (props.faq === 'personal' ? personalFaq.map(renderQuestion) : businessFaq.map(renderQuestion)) : (props.faq === 'personal' ? esPersonalFaq.map(renderQuestion) : esBusinessFaq.map(renderQuestion)) }
            
        </Container>
    )
}


export default Faq;
