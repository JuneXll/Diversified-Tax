import React from 'react';
import { Container } from 'react-bootstrap';
import showForm from '../../showForm';

const paddingTop = {
    paddingTop: 200
}

const NewBusiness = () => {
    return(
        <div style={paddingTop}>
            <h1>New Business Client</h1>
            <Container>
                {showForm()}
            </Container>
        </div>
    )
}

export default NewBusiness;