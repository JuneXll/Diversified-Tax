import React, { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { personalFaq } from '../../questionData/personalFaq';

const headings = {
    lineHeight: '2',
    letterSpacing: '4px',
    fontFamily: 'Bebas Neue, cursive',
}

const questionDiv = {
    backgroundColor: '#003054',
    borderRadius: '5px',
}

const questionText = {
    letterSpacing: '2px',
    fontFamily: 'Open Sans, sans-serif'
}


const Faq = () => {

    const [showAnswer, setShowAnswer] = useState(false);
    const onClick = () => setShowAnswer(!showAnswer);
        
    const renderQuestion = (question, index) => {
        
        return (
            <div className='my-2 p-2' style={questionDiv} key={index}>
                <p className='m-2' style={questionText}>
                    <span className='p-2' onClick={onClick}>
                    {!showAnswer ? (<i className="fas fa-angle-down m-1"></i>) : (<i className="fas fa-angle-up"></i>)}
                    </span>{question.question}</p>
                {showAnswer && (<p className='p-3' style={questionText}>{question.answer}</p>) }
            </div>
        )

    }

    return(
        <Container>
            <Container className='my-5' style={{backgroundColor:'#e1ad00', borderRadius:'5px', boxShadow: '5px 5px 5px #ccc'}}>
                <Container className='text-white'>
                    <h1 className='pt-2 text-center' style={headings}>FAQ</h1>
                    <Row className='p-4'>
                        {personalFaq.map(renderQuestion)}
                    </Row>
                </Container>
            </Container>
        </Container>
    )
}

export default Faq;