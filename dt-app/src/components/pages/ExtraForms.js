import React from 'react';
import  { Container } from 'react-bootstrap';
import showForm from '../../showForm';

const paddingTop = {
    paddingTop: 200
}

const ExtraForms = () => {
    return(
        <div style={paddingTop}>
            <h1 className='display-1'>Extra Forms</h1>
            <Container>
                {showForm()}
            </Container>
        </div>
    )
}

export default ExtraForms;