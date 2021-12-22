import React from "react";
import { Container, Button } from 'react-bootstrap';

const Success = () => {
    return (
        <Container>
            <h1 className="display-1">
                Thank you for your submission. We will be in contact soon!
                <Button href='/'>Go Back Home</Button>
            </h1>
        </Container>
    )
}

export default Success;