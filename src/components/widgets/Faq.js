import React, { useEffect } from 'react';
import { Container} from 'react-bootstrap';
//Import questions 
import { personalFaq } from '../../questionData/personalFaq';
import { businessFaq } from '../../questionData/businessFaq';
//import accordion effect
import Accordion from './Accordion';
//Js cookie import
import Cookie from 'js-cookie';
import i18next from 'i18next';

const headings = {
    lineHeight: '2',
    letterSpacing: '10px',
    fontFamily: 'Bebas Neue, cursive',
    color: 'white'
}

const questionDiv = {
    backgroundColor: '#e1ad00',
    borderRadius: '5px',
    boxShadow: '5px 5px 5px #ccc',
    marginTop: '7em'
}

const Faq = (props) => {

    const cookie = Cookie.get(i18next) || 'en';

    useEffect(()=>{
        console.log(cookie);
    },[cookie])
    

    const renderQuestion = (question) => {
        return(
            <Accordion quest={question.question} ans={question.answer}/> 
        )
    }

    return(
        <Container className='p-3' style={questionDiv}>
            <h1 className='text-center' style={headings}>FAQ</h1>
            {props.faq === 'personal' ? personalFaq.map(renderQuestion) : businessFaq.map(renderQuestion)}
        </Container>
    )
}


export default Faq;
