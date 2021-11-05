import React from 'react';
import { Container, Card } from 'react-bootstrap';
import homeCover from '../../images/homeCover.png'

const paddingTop = {
    paddingTop: 100
}

const Home = () => {
    return (
        <div style={paddingTop}>
            <div>
                <Container className=''>
                    <Card className="bg-dark text-white">
                        <Card.Img src={homeCover} alt="Card image" />
                        <Card.ImgOverlay>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This content is a little bit longer.
                            </Card.Text>
                            <Card.Text>Last updated 3 mins ago</Card.Text>
                            </Card.ImgOverlay>
                    </Card>
                </Container>
            </div>
        </div>
    )
}

export default Home;