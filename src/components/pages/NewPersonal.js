import React from 'react';
import { useTranslation } from 'react-i18next';
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
    fontFamily: 'Bebas Neue, tahoma',
}

const paragraph = {
    lineHeight: '1.5',
    letterSpacing: '2px',
    fontFamily: 'Open Sans, sans-serif',
}

const NewPersonal = () => {

    const { t } = useTranslation();

    return(
        <div style={paddingTop}>
            <Container>
                <Container style={blueDiv} className='m1'>
                    <h1 className='text-center text-white' style={heading}>{t('new_p_form_header')}</h1>
                    <p className='text-center text-white' style={paragraph}>{t('new_p_form_subtitle')}</p>
                </Container>
            </Container>
            <Container>
                {showForm()}
            </Container>
        </div>
    )
}

export default NewPersonal;