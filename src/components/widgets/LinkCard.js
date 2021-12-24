import React from 'react';
import { useTranslation } from 'react-i18next';
import { Container, Card, Row, Col } from 'react-bootstrap';
// Imported images
import extraFormsImg from 'https://ik.imagekit.io/diversifiedtax/images/extra-forms.png?updatedAt=1640385299840';

const headings = {
    lineHeight: '2',
    letterSpacing: '4px',
    fontFamily: 'Bebas Neue, tahoma',
}

const anchorHref = {
    textDecoration: 'none'
}


const LinkDiv = (props) => {

    const { t } = useTranslation();

    return (
        <Container className='my-5'>
            
            <Row className='d-flex justify-content-around'>

                <Col className='col'>
                    <a href={props.firstHref} style={anchorHref} aria-label='New Clients'>
                        <Card className='p-3 mb-3 text-white' style={{backgroundColor:'#003054',boxShadow: '5px 5px 5px #ccc'}}>
                            <Card.Header><h3 style={headings}>{props.firstLink}</h3></Card.Header>
                                <Card.Img 
                                variant="top" 
                                src={props.firstSrc} 
                                style={{borderRadius:'5px'}}
                                alt='Happy New Clients'/>
                        </Card>
                    </a>
                </Col>

                <Col className='col' >
                    <a href={props.secondHref} style={anchorHref} aria-label='Returning Clients'>
                        <Card className='p-3 mb-3 text-white' style={{backgroundColor:'#003054',boxShadow: '5px 5px 5px #ccc'}}>
                            <Card.Header><h3 style={headings}>{props.secondLink}</h3></Card.Header>
                                <Card.Img 
                                    variant="top" 
                                    src={props.secondSrc}
                                    style={{borderRadius:'5px'}} 
                                    alt='Excited Returning Clients'/>
                        </Card>
                    </a>
                </Col>

                <Col className='col' >
                    <a href='/extra-forms' style={anchorHref} aria-label='Extra forms'>
                        <Card className='p-3 mb-3 text-white' style={{backgroundColor:'#003054',boxShadow: '5px 5px 5px #ccc'}}>
                            <Card.Header><h3 style={headings}>{t('link_card_submit_extra')}</h3></Card.Header>
                                <Card.Img 
                                    variant="top" 
                                    src={extraFormsImg} 
                                    style={{borderRadius:'5px'}}
                                    alt='1040 form with a calculator and pencil over it'/>
                        </Card>
                    </a>
                </Col>
            </Row>
        </Container>
    )
}

export default LinkDiv;
