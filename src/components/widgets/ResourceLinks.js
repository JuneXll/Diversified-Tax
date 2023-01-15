import React from 'react';
import { useTranslation } from 'react-i18next';
import { Container, Card, Row, Col, Button } from 'react-bootstrap';

const heading = {
    lineHeight: '2',
    letterSpacing: '10px',
    fontFamily: 'Bebas Neue, tahoma',
    marginBottom:'1em'
}

const cardTitle = {
    lineHeight: '2',
    letterSpacing: '4px',
    fontFamily: 'Bebas Neue, tahoma',
}

const cardText = {
    lineHeight: '1.5',
    letterSpacing: '2px',
    fontFamily: 'Open Sans, sans-serif'
}

const blueButton = {
    backgroundColor:'#003054',
    fontFamily: 'Bebas Neue, tahoma',
    letterSpacing: '2px',
    border: 'none',
    boxShadow: '5px 5px 5px #ccc'
}

const ResourceLinks = () => {

    //Sets translations for the page
    const { t } = useTranslation();

    return (
        <Container>
            <h2 className='text-center' style={heading}>{t('resource_header')}</h2>
            <Container fluid>
                <Row xs={1} md={2} lg={3} className="g-6 d-flex justify-content-center">
                    <Col className='p-1'>
                        <Card style={{border:'none'}}>
                            <Card.Body>
                                <Card.Title style={cardTitle}>{t('card_one_title')}</Card.Title>
                                <Card.Text style={cardText}>
                                {t('card_one_text')}
                                </Card.Text>
                                <Button 
                                    href="https://www.irs.gov/refunds" 
                                    target='_blank' 
                                    rel="noreferrer"
                                    style={blueButton}
                                    >{t('card_one_button')}</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='p-1'>
                        <Card style={{border:'none'}}>
                            <Card.Body>
                                <Card.Title style={cardTitle}>{t('card_two_title')}</Card.Title>
                                <Card.Text style={cardText}>
                                {t('card_two_text')}
                                </Card.Text>
                                <Button 
                                    href="https://www.irs.gov/payments" 
                                    target='_blank' 
                                    rel="noreferrer"
                                    style={blueButton}
                                    >{t('card_two_button')}</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='p-1'>
                        <Card style={{border:'none'}}>
                            <Card.Body>
                                <Card.Title style={cardTitle}>{t('card_three_title')}</Card.Title>
                                <Card.Text style={cardText}>
                                {t('card_three_text')}
                                </Card.Text>
                                <Button 
                                    href="https://www.sba.gov/funding-programs/disaster-assistance" 
                                    target='_blank' 
                                    rel="noreferrer"
                                    style={blueButton}
                                    >{t('card_three_button')}</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='p-1'>
                        <Card style={{border:'none'}}>
                            <Card.Body>
                                <Card.Title style={cardTitle}>{t('card_four_title')}</Card.Title>
                                <Card.Text style={cardText}>
                                {t('card_four_text')}
                                </Card.Text>
                                <Button 
                                    href="https://www.irs.gov/individuals/get-transcript" 
                                    target='_blank' 
                                    rel="noreferrer"
                                    style={blueButton}
                                    >{t('card_four_button')}</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='p-1'>
                        <Card style={{border:'none'}}>
                            <Card.Body>
                                <Card.Title style={cardTitle}>{t('card_five_title')}</Card.Title>
                                <Card.Text style={cardText}>
                                {t('card_five_text')}
                                </Card.Text>
                                <Button 
                                    href="https://www.irs.gov/publications" 
                                    target='_blank' 
                                    rel="noreferrer"
                                    style={blueButton}
                                    >{t('card_five_button')}</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    {/*<Col className='p-1'>
                        <Card style={{border:'none'}}>
                            <Card.Body>
                                <Card.Title style={cardTitle}>{t('card_six_title')}</Card.Title>
                                <Card.Text style={cardText}>
                                {t('card_six_text')}
                                </Card.Text>
                                <Button 
                                    href="https://www.irs.gov/coronavirus/get-my-payment" 
                                    target='_blank' 
                                    rel="noreferrer"
                                    style={blueButton}
                                    >{t('card_six_button')}</Button>
                            </Card.Body>
                        </Card>
                    </Col>*/}
                </Row>
            </Container>
        </Container>
    )
}

export default ResourceLinks;