import React from "react";
import { Container, Button } from 'react-bootstrap';

const blueDiv = {
    backgroundColor:'#003054', 
    borderRadius:5,
    boxShadow: '5px 5px 5px #ccc',
    marginTop: 100
}

const heading = {
    fontFamily: 'Bebas Neue, tahoma',
    letterSpacing: '6px',
}

const yellowButton = {
    backgroundColor:'#E1AD00',
    fontFamily: 'Bebas Neue, tahoma',
    letterSpacing: '4px',
    border: 'none',
    borderRadius: '5px'
}

const Success = () => {
    return (
        <Container className='d-column justify-content-center align-items-center p-5 text-white text-center' style={blueDiv}>
            <h1 className="display-3" style={heading}>
                Thank you for your submission. 
            </h1>
            <h2 className='display-4 pb-3' style={heading}>We will be in contact soon! </h2>
            <Button href='/' style={yellowButton} aria-label='Got page to homepage'>Go Back Home</Button>
        </Container>
    )
}

export default Success;