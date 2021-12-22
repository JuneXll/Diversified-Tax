import React from "react";
import { Container, Button } from 'react-bootstrap';

const Success = () => {
    return (
        <Container className='d-column justify-content-center align-content-center'>
            <h1 className="display-1">
                Thank you for your submission. 
            </h1>
            <h2 className='display-2'>We will be in contact soon! </h2>
            <Button href='/'>Go Back Home</Button>
        </Container>
    )
}

export default Success;