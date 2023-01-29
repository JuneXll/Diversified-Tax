import React from 'react';
import { useTranslation } from 'react-i18next';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';

const businessPortal = 'https://ik.imagekit.io/diversifiedtax/images/business-returning.png?updatedAt=1640385349651';
const personalClient = "https://ik.imagekit.io/diversifiedtax/images/portal_personal.png?ik-sdk-version=javascript-1.4.3&updatedAt=1675025741397"

//Tax portal
const taxPortal = 'https://filemytaxes.taxdome.com/'

const img = {
    objectFit: 'cover',
    width: '100%',
    height: '100%',
    borderRadius: '5px',
    boxShadow: '5px 5px 5px #ccc'
}

const serviceText = {
    letterSpacing: '2px',
    fontFamily: 'Bebas Neue, tahoma',
}

const paragraphs = {
    lineHeight: '1.5',
    letterSpacing: '2px',
    fontFamily: 'Open Sans, sans-serif'
}

const yellowButton = {
    backgroundColor:'#e1ad00',
    fontFamily: 'Bebas Neue, tahoma',
    letterSpacing: '4px',
    border: 'none',
    boxShadow: '5px 5px 5px #ccc'
}

const ClientPortal = (props) => {
    //Sets translations for the page
    const { t } = useTranslation();

    return (
        <>
        {props.client === 'business' ? 
        (<Row>
            <Col xs={12} lg={6}>
                <h2 className='mb-3 m-4' style={serviceText}>{t('client_portal_header')}</h2>
                <p className='m-4' style={paragraphs}>{t('client_portal_content')}</p>
                <Container className='d-flex justify-content-end'> 
                    <Button href={taxPortal} target='_blank' style={yellowButton} className='my-3 mx-2' aria-label='Tax portal'>{t('p_cover_button_one')}</Button>
                </Container>
            </Col>
            <Col xs={12} lg={6}>
                <Image fluid src={businessPortal} style={img} alt='Business'/>
            </Col>
        </Row>)
        : 
        (<Row>
            <Col xs={12} lg={6}>
                <Image fluid src={personalClient} style={img} alt='Personal'/>
            </Col>
            <Col xs={12} lg={6}>
                <h2 className='mb-3 m-4' style={serviceText}>{t('client_portal_header')}</h2>
                <p className='m-4' style={paragraphs}>{t('client_portal_content')}</p>
                <Container className='d-flex justify-content-end'> 
                    <Button href={taxPortal} target='_blank' style={yellowButton} className='my-3 mx-2' aria-label='Tax portal'>{t('p_cover_button_one')}</Button>
                </Container>
            </Col>
        </Row>)
        }
     </>
    )

}

export default ClientPortal;