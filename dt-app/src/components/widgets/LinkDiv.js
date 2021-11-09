import React from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap';
import yellowCalc from '../../images/yellowCalc.jpeg';

const headings = {
    lineHeight: '2',
    letterSpacing: '4px',
    fontFamily: 'Bebas Neue, cursive',
}


const LinkDiv = () => {

    return (
        <Container>
                <Row className='d-flex justify-content-around'>

                    <Col className='col-xl-5 col-lg-5 col-md-8 col-sm-10 col-xs-12'>
                        <Card className='p-3 mb-3 text-white' style={{backgroundColor:'#003054',boxShadow: '5px 5px 5px #ccc'}}>
                            <Card.Header><h3 style={headings}>Personal Taxes</h3></Card.Header>
                            <Card.Img variant="top" src={yellowCalc} />
                        </Card>
                    </Col>
                    <Col className='col-xl-5 col-lg-5 col-md-8 col-sm-10 col-xs-12' >
                        <Card className='p-3 mb-3 text-white' style={{backgroundColor:'#003054',boxShadow: '5px 5px 5px #ccc'}}>
                            <Card.Header><h3 style={headings}>Business Taxes</h3></Card.Header>
                            <Card.Img variant="top" src={yellowCalc} />
                            
                        </Card>
                    </Col>
                    <Col className='col-xl-5 col-lg-5 col-md-8 col-sm-10 col-xs-12' >
                        <Card className='p-3 mb-3 text-white' style={{backgroundColor:'#003054',boxShadow: '5px 5px 5px #ccc'}}>
                            <Card.Header><h3 style={headings}>Business Taxes</h3></Card.Header>
                            <Card.Img variant="top" src={yellowCalc} />
                            
                        </Card>
                    </Col>
                </Row>
            </Container>
    )
}

export default LinkDiv;