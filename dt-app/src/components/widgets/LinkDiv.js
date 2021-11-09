import React from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap';
import yellowCalc from '../../images/yellowCalc.jpeg';

const headings = {
    lineHeight: '2',
    letterSpacing: '4px',
    fontFamily: 'Bebas Neue, cursive',
}


const LinkDiv = (props) => {

    return (
        <Container className='my-5'>
            
            <Row className='d-flex justify-content-around'>

                <Col className='col'>
                    <Card className='p-3 mb-3 text-white' style={{backgroundColor:'#003054',boxShadow: '5px 5px 5px #ccc'}}>
                        <Card.Header><h3 style={headings}>{props.firstLink}</h3></Card.Header>
                            <Card.Img variant="top" src={yellowCalc} />
                    </Card>
                </Col>

                <Col className='col' >
                    <Card className='p-3 mb-3 text-white' style={{backgroundColor:'#003054',boxShadow: '5px 5px 5px #ccc'}}>
                        <Card.Header><h3 style={headings}>{props.secondLink}</h3></Card.Header>
                            <Card.Img variant="top" src={yellowCalc} />
                            
                    </Card>
                </Col>

                <Col className='col' >
                    <Card className='p-3 mb-3 text-white' style={{backgroundColor:'#003054',boxShadow: '5px 5px 5px #ccc'}}>
                        <Card.Header><h3 style={headings}>{props.thirdLink}</h3></Card.Header>
                            <Card.Img variant="top" src={yellowCalc} />
                            
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default LinkDiv;

// Add onclicks for links to reroute to form pages