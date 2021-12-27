import React from 'react';
// import { useTranslation } from 'react-i18next';
import { Container, Card, Row, Col } from 'react-bootstrap';

const heading = {
    lineHeight: '2',
    letterSpacing: '10px',
    fontFamily: 'Bebas Neue, tahoma',
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

const ResourceLinks = () => {
    return (
        <Container>
            <h2 className='text-center' style={heading}>Extra Resources</h2>
            <Container fluid>
                <Row xs={1} md={3} lg={4} className="g-6 d-flex justify-content-center">
                    <Col className='m-1'>
                        <Card style={{border:'none'}}>
                            <Card.Body>
                                <Card.Title style={cardTitle}>Card Title</Card.Title>
                                <Card.Text style={cardText}>
                                    Some quick example text to build on the card title and make up the bulk of the card's content.
                                </Card.Text>
                                <Card.Link href="#">Card Link</Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='m-1'>
                        <Card style={{border:'none'}}>
                            <Card.Body>
                                <Card.Title style={cardTitle}>Card Title</Card.Title>
                                <Card.Text style={cardText}>
                                    Some quick example text to build on the card title and make up the bulk of the card's content.
                                </Card.Text>
                                <Card.Link href="#">Card Link</Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='m-1'>
                        <Card style={{border:'none'}}>
                            <Card.Body>
                                <Card.Title style={cardTitle}>Card Title</Card.Title>
                                <Card.Text style={cardText}>
                                    Some quick example text to build on the card title and make up the bulk of the card's content.
                                </Card.Text>
                                <Card.Link href="#">Card Link</Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='m-1'>
                        <Card style={{border:'none'}}>
                            <Card.Body>
                                <Card.Title style={cardTitle}>Card Title</Card.Title>
                                <Card.Text style={cardText}>
                                    Some quick example text to build on the card title and make up the bulk of the card's content.
                                </Card.Text>
                                <Card.Link href="#">Card Link</Card.Link>
                            </Card.Body>
                        </Card></Col>
                    <Col className='m-1'>
                        <Card style={{border:'none'}}>
                            <Card.Body>
                                <Card.Title style={cardTitle}>Card Title</Card.Title>
                                <Card.Text style={cardText}>
                                    Some quick example text to build on the card title and make up the bulk of the card's content.
                                </Card.Text>
                                <Card.Link href="#">Card Link</Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='m-1'>
                        <Card style={{border:'none'}}>
                            <Card.Body>
                                <Card.Title style={cardTitle}>Card Title</Card.Title>
                                <Card.Text style={cardText}>
                                    Some quick example text to build on the card title and make up the bulk of the card's content.
                                </Card.Text>
                                <Card.Link href="#">Card Link</Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

export default ResourceLinks;