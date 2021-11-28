import React from 'react';
import { Container} from 'react-bootstrap';
//Import questions 
import { personalFaq } from '../../questionData/personalFaq';
import { businessFaq } from '../../questionData/businessFaq';
//import accordion effect
import Accordion from './Accordion';

const headings = {
    lineHeight: '2',
    letterSpacing: '10px',
    fontFamily: 'Bebas Neue, cursive',
    color: 'white'
}

const questionDiv = {
    backgroundColor: '#e1ad00',
    borderRadius: '5px',
    boxShadow: '5px 5px 5px #ccc'
}

const Faq = (props) => {

    const renderQuestion = (question) => {
        return(
            <Accordion quest={question.question} ans={question.answer}/> 
        )
    }

    return(
        <Container className='p-5' style={questionDiv}>
            <h1 className='text-center' style={headings}>FAQ</h1>
            {props.faq === 'personal' ? personalFaq.map(renderQuestion) : businessFaq.map(renderQuestion)}
        </Container>
    )
}


export default Faq;