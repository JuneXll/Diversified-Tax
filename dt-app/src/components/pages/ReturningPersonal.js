import React from 'react';
import { Container } from 'react-bootstrap';
import showForm from '../../showForm';

const paddingTop = {
    paddingTop: 200
}

const ReturningPersonal = () => {
    return(
        <div style={paddingTop}>
            <h1>Returning Personal Clients</h1>
            <Container>
                {showForm()}
            </Container>
        </div>
    )
}

export default ReturningPersonal;