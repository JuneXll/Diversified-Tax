import React from 'react';
import { Container, Card } from 'react-bootstrap';

const paddingTop = {
    paddingTop: 100
}

const Home = () => {
    return (
        <div style={paddingTop}>
            <div>
                <Container>
                    <Card className="bg-dark text-white">
                        <Card.Img src="../images/logo.png" alt="Card image" />
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