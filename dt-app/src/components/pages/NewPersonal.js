import React from 'react';
import { Container } from 'react-bootstrap';
import showForm from '../../showForm';

const paddingTop = {
    paddingTop: 100
}

const blueDiv = {
    backgroundColor: '#003054',
    boxShadow: '5px 5px 5px #ccc',
    borderRadius: '5px',
    padding: '32px',
    marginBottom: '14px'
}

const heading = {
    lineHeight: '2',
    letterSpacing: '8px',
    fontFamily: 'Bebas Neue, cursive',
}

const paragraph = {
    lineHeight: '1.5',
    letterSpacing: '2px',
    fontFamily: 'Open Sans, sans-serif',
}

const NewPersonal = () => {
    return(
        <div style={paddingTop}>
            <Container>
                <Container style={blueDiv} className='m1'>
                    <h1 className='text-center text-white' style={heading}>Thanks for joining our Diversified Tax family!</h1>
                    <p className='text-center text-white' style={paragraph}>Fill out the forms below.</p>
                </Container>
            </Container>
            <Container>
                {showForm()}
            </Container>
        </div>
    )
}

export default NewPersonal;