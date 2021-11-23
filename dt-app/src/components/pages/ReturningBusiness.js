import React from 'react';
import { Container } from 'react-bootstrap';
import showForm from '../../showForm';

const paddingTop = {
    paddingTop: 200
}

const ReturningBusiness = () => {
    return(
        <div style={paddingTop}>
            <h1>Returning Business Clients</h1>
            <Container>
                {showForm()}
            </Container>
        </div>
    )
}

export default ReturningBusiness;